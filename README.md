# GrapesJS Plugin Boilerplate

### Usage
1. Clone this repository `git clone https://github.com/artf/grapesjs-plugin-boilerplate.git YOUR-PLUGIN-NAME`
1. Replace in all files `YOUR-PLUGIN-NAME` and `grapesjs-plugin-boilerplate` with your plugin name.
  **The name of your plugin depends on the `name` key in your `package.json`**
1. Update all the data in `package.json`
1. Install dependencies `npm i` and run the local server `npm start`
1. Start creating your plugin from `src/index.js`
1. Show some gif/demo if possible
1. Update README
1. When you're ready, build your source with `npm run build`
1. Publish


## Summary

* Plugin name: `grapesjs-custom-bootstrap`
* Components
  * `new-component1`
  * `new-component2`
* Blocks
  * `new-block1`
  * `new-block1`
...





## Options

|Option|Description|Default|
|-|-|-
|`option1`|Description option|`default value`|





## Usage

Directly in the browser
```html
<link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet"/>
<script src="https://unpkg.com/grapesjs"></script>
<script src="path/to/grapesjs-custom-bootstrap.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      // ...
      plugins: ['grapesjs-custom-bootstrap'],
      pluginsOpts: {
        'grapesjs-custom-bootstrap': { /* options */ }
      }
  });
</script>
```

Modern javascript
```js
import grapesjs from 'grapesjs';
import grapesjs-custom-bootstrap from 'grapesjs-custom-bootstrap';

const editor = grapesjs.init({
  container : '#gjs',
  // ...
  plugins: [grapesjs-custom-bootstrap],
  pluginsOpts: {
    [grapesjs-custom-bootstrap]: { /* options */ }
  }
  // or
  plugins: [
    editor => grapesjs-custom-bootstrap(editor, { /* options */ }),
  ],
});
```

## License

BSD 3-Clause
