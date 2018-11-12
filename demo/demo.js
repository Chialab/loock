import Loock from '../src/index.js';

const loock = new Loock();
const context = loock.createContext(document.querySelector('.a11y-bar'));

const MAX_FONT_SIZE = 24;
const MIN_FONT_SIZE = 12;
const textContent = document.querySelector('.text-content');
let currentFontSize;

// a11ybar listeners
document.querySelector('button[name="buttonChangeFont"]').addEventListener('click', () => {
    const font = textContent.style.fontFamily;
    const newFontFamily = font === 'sans-serif' ? 'Monospace' : 'sans-serif';
    textContent.style.fontFamily = newFontFamily;
});

const handleButtonStates = () => {
    if (currentFontSize === MAX_FONT_SIZE) {
        buttonZoomIn.setAttribute('disabled', true);
        buttonZoomIn.classList.add('disabled');
    } else {
        buttonZoomIn.removeAttribute('disabled');
        buttonZoomIn.classList.remove('disabled');
    }

    if (currentFontSize === MIN_FONT_SIZE) {
        buttonZoomOut.setAttribute('disabled', true);
        buttonZoomOut.classList.add('disabled');
    } else {
        buttonZoomOut.removeAttribute('disabled');
        buttonZoomOut.classList.remove('disabled');
    }
};

const buttonZoomIn = document.querySelector('button[name="buttonZoomIn"]');
buttonZoomIn.addEventListener('click', () => {
    currentFontSize = parseInt(window.getComputedStyle(textContent).fontSize);
    if (currentFontSize === MAX_FONT_SIZE) {
        return;
    }
    textContent.style.fontSize = `${++currentFontSize}px`;
    currentFontSize = parseInt(window.getComputedStyle(textContent).fontSize);
    handleButtonStates();
});

const buttonZoomOut = document.querySelector('button[name="buttonZoomOut"]');
buttonZoomOut.addEventListener('click', () => {
    currentFontSize = parseInt(window.getComputedStyle(textContent).fontSize);
    if (currentFontSize === MIN_FONT_SIZE) {
        return;
    }
    textContent.style.fontSize = `${--currentFontSize}px`;
    currentFontSize = parseInt(window.getComputedStyle(textContent).fontSize);
    handleButtonStates();
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

// context listeners
context.on('exit', () => {
    const element = document.querySelector('.a11y-bar');
    if (!element) {
        return;
    }
    close(element);
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
