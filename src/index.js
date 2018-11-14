import { Factory } from '@chialab/proteins';

const SELECTORS = [
    'button',
    'a[href]',
    'input',
    'select',
    'textarea',
    '[tabindex]',
];

const TIME_BETWEEN_KEYDOWNS = 150;

/**
 * Loock context class.
 */
class LoockContext extends Factory.Emitter {
    /**
     * @constructor
     */
    constructor(element, options = {}) {
        super();
        this.root = element;
        this.options = options;
        this.isActive = false;
        this.currentElement = null;
        this.ignore = this.options.ignore;
        this.lastKeydownTime = Date.now();

        if (!element.hasAttribute('tabindex')) {
            element.setAttribute('tabindex', '0');
        }
        if (!element.hasAttribute('aria-label')) {
            // eslint-disable-next-line
            console.warn('created a LoockContext without aria-label', this);
        }
    }

    /**
     * Returns focusable children elements.
     *
     * @returns {Array<HTMLElement>} focusable children of root element.
     */
    findFocusableChildren() {
        const elements = [...this.root.querySelectorAll(
            SELECTORS.map((selector) => `${selector}:not([tabindex="-1"]):not([aria-hidden])`).join(', ')
        )];
        const ignore = this.ignore ? [...this.root.querySelectorAll(this.ignore)] : [];

        return elements
            .filter((elem) => {
                const rect = elem.getBoundingClientRect();
                return rect.height && rect.width;
            })
            .filter((elem) => !ignore.some((area) => elem === area || area.contains(elem)));
    }

    /**
     * Active previous focusable element.
     *
     * @returns {void}
     */
    prev() {
        let children = this.findFocusableChildren();
        if (!children.length) {
            this.restore();
            return;
        }
        let io = children.indexOf(this.currentElement);
        if (io === 0) {
            io = children.length - 1;
        } else if (io !== -1) {
            io = io - 1;
        } else {
            io = 0;
        }
        this.currentElement = children[io];
        this.currentElement.focus();
    }

    /**
     * Active next focusable element.
     *
     * @returns {void}
     */
    next() {
        let children = this.findFocusableChildren();
        if (!children.length) {
            this.restore();
            return;
        }
        let io = children.indexOf(this.currentElement);
        if (io === children.length -1) {
            io = 0;
        } else if (io !== -1) {
            io = io + 1;
        } else {
            io = 0;
        }
        this.currentElement = children[io];
        this.currentElement.focus();
    }

    /**
     * Entering the context.
     *
     * @returns {void}
     */
    enter() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.trigger('enter');
        this.restore();
    }

    /**
     * Restore the focus on the last element.
     * @return {void}
     */
    restore() {
        if (this.currentElement) {
            this.currentElement.focus();
        } else {
            this.root.focus();
        }
    }

    /**
     * Exit from the context.
     *
     * @returns {void}
     */
    exit() {
        if (!this.isActive) {
            return;
        }
        this.isActive = false;
        this.currentElement = null;
        this.trigger('exit');
    }
}

/**
 * A manager for Loock contexts.
 */
export default class Loock {
    /**
     * @constructor
     */
    constructor(root = window) {
        this.contexts = [];
        this.actives = [];
        root.addEventListener('keydown', (event) => {

            // prevent compulsively key holding down in all browsers.
            if ((Date.now() - this.lastKeydownTime) < TIME_BETWEEN_KEYDOWNS) {
                event.preventDefault();
                event.stopPropagation();
                return;
            }
            this.lastKeydownTime = Date.now();

            if (!this.activeContext) {
                return;
            }
            if (event.key == 'Escape' || event.key == 'Esc') {
                event.preventDefault();
                event.stopPropagation();
                this.activeContext.exit();
            }
            if (event.keyCode == '9') {
                event.preventDefault();
                event.stopPropagation();
                let elements = this.activeContext.findFocusableChildren();
                if (elements.length === 0) {
                    this.activeContext.exit();
                    return;
                }
                if (event.shiftKey) {
                    this.activeContext.prev();
                } else {
                    this.activeContext.next();
                }
            }
        });

        root.addEventListener('focusin', ({ target }) => {
            let context = this.contexts.find(({ root }) => root === target);
            if (context && !context.isActive) {
                context.enter();
                return;
            }
            if (!this.activeContext) {
                return;
            }
            if (target === this.activeContext.root) {
                this.activeContext.currentElement = null;
                return;
            }
            const elements = this.activeContext.findFocusableChildren();
            if (elements.indexOf(target) !== -1) {
                this.activeContext.currentElement = target;
            }
        });
    }

    /**
     * Creates a default context.
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @returns {LoockContext} new context
     */
    createDefaultContext(element, options = {}) {
        this.defaultContext = this.createContext(element, options);
        this.defaultContext.enter();
        this.contexts.push(this.defaultContext);
        return this.defaultContext;
    }

    /**
     * Creates new context.
     *
     * @param {HTMLElement} element
     * @param {Object} options
     * @returns {LoockContext} new context
     */
    createContext(element, options = {}) {
        let context = new LoockContext(element, options);

        this.contexts.push(context);

        context.on('enter', () => {
            this.activeContext = context;
            this.actives.push(context);
        });

        context.on('exit', () => {
            let isActiveContext = context === this.activeContext;
            let io = this.actives.indexOf(context);
            this.actives.splice(io, 1);

            if (!isActiveContext) {
                return;
            }

            if (this.actives.length) {
                this.activeContext = this.actives[this.actives.length - 1];
                this.activeContext.restore();
                return;
            }

            delete this.activeContext;

            if (this.defaultContext) {
                this.defaultContext.enter();
            }
        });

        return context;
    }
}
