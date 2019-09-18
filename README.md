@ifaxity/koa-json
===================

## A minimal koa@2 pug/html render engine

Minimal dependencies & code is cut down to not take so much space.
Because node_modules hell is something i want to avoid.
This module was for private purposes but making it public wont do any harm.

Code heavily based on the [koa-views package](https://www.npmjs.com/package/koa-views)

------------------
## Installation:

`npm install @ifaxity/koa-json --save`

or if you use yarn

`yarn add @ifaxity/koa-json`

--------
## Usage

To use the module just require it like this

`const jwt = require('@ifaxity/koa-json');`

And then you need to add it to your koa server like this:

```js
const render = require('@ifaxity/koa-json');

// or whatever folder you use for your views
app.use(render(__dirname + '/views'), {
  ext: 'pug',
  globals: {
    title: 'Default title',
  }
});


// Example route
app.use(async ctx => {
  // Render state object
  ctx.state = {
    title: 'Index page title',
  };

  await ctx.render('index', {
    foo: 'bar',
  });
});

// You can also switch between .pug and .html files like this
// As the option 'ext' only specifies the default extension
app.use(async ctx => {
  await ctx.render('index.html');
});
```
