<p align="center">
    <a href="https://www.chialab.io/p/loock">
        <img alt="Loock logo" width="144" height="144" src="https://raw.githack.com/chialab/loock/master/logo.svg" />
    </a>
</p>

<p align="center">
  <strong>Loock</strong> • A focus trap helper for keyboard navigation on the web.
</p>

<p align="center">
    <a href="https://www.npmjs.com/package/@chialab/loock"><img alt="NPM" src="https://img.shields.io/npm/v/@chialab/loock.svg"></a>
</p>

---

## Introducing Loock

* Organize your web page or web application by navigation areas.
* Never lose the context while navigating the area with the `TAB` key.
* Leave the context with the `ESC` key.
* Use a default context.

Medium article - ["How to improve keyboard navigation of your web page"](https://medium.com/chialab-open-source/how-to-improve-keyboard-navigation-of-your-web-page-f11b324adbab)

[Try out the demo!](https://codesandbox.io/s/ypjoj2r1qv)

## Install

```sh
$ npm install @chialab/loock
$ yarn add @chialab/loock
```

Use via cdn:

```html
<script src="https://unpkg.com/@chialab/loock"></script>
```

## Usage

```ts
import { Loock } from '@chialab/loock';

const loock = new Loock();
const mainElem = document.getElementById('main');
const navigationElem = document.getElementById('main');

// define the default context
const mainContext = loock.createDefaultContext(mainElem);

// define one context
const context = loock.createContext(navigationElem);

// listen context state
navigationElem.addEventListener('focusenter', () => {
    console.log('entered the navigation context');
    // do stuff
});

navigationElem.addEventListener('focusexit', () => {
    console.log('exited the navigation context');
    // do stuff
});

// activate the context
context.enter();
```

```html
<html>
    <body>
        <nav id="navigation" aria-label="Main navigation">
            <a href="/">Home</a>
            <a href="/posts">Posts</a>
            <a href="/login">Login</a>
        </nav>
        <section id="main" aria-label="Main content">
            ...
        </section>
    </body>
</html>
```

On page load, the `#navigation` will be automatically focused and you can navigate the links using the `TAB` key without losing focus from the nav element. Press `ESC` to exit the navigation context and skip to the default context, the `#main` element.

For a more complete example, please see the [demo source code](https://codesandbox.io/s/ypjoj2r1qv).

---

## Development

### Build

Install the dependencies and run the `build` script:

```
$ npm install
$ npm run build
```

This will generate the UMD and ESM bundles in the `dist` folder, as well as the declaration file.

### Test

Run the `test` script:

```
$ npm run test
```

---

## License

Loock is released under the [MIT](https://github.com/chialab/loock/blob/master/LICENSE) license.
