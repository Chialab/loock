import Loock from '../src/index.js';

const loock = new Loock();
const context = loock.createContext(document.querySelector('.a11y-bar'));

context.on('exit', () => {
    const element = document.querySelector('.a11y-bar');
    if (!element) {
        return;
    }
    close(element);
});

let opened = false;

document.querySelector('button[name="show"]').addEventListener('click', () => {
    const element = document.querySelector('.a11y-bar');
    if (!element) {
        return;
    }

    if (opened) {
        close(element);
    } else {
        open(element);
    }
});

const open = (element) => {
    opened = true;
    element.classList.add('active');
    context.enter();
};

const close = (element) => {
    opened = false;
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    }
    context.exit();
};

const content = document.querySelector('.content');
loock.createDefaultContext(content);
