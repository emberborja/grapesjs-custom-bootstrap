# GrapesJS Plugin Boilerplate


<span><a href="https://david-dm.org/artf/grapesjs-plugin-boilerplate#info=devDependencies" title="View the status of this project's development dependencies on DavidDM"><img src="https://img.shields.io/david/dev/artf/grapesjs-plugin-boilerplate.svg" alt="Dev Dependency Status" /></a></span>

This boilerplate helps you quickly start a production ready plugin for GrapesJS. If you don't know from where to start, check this guide [Creating plugins](https://github.com/artf/grapesjs/wiki/Creating-plugins). Sections below are also used as boilerplate for your README, follow steps

### Usage
1. Clone this repository `git clone https://github.com/artf/grapesjs-plugin-boilerplate.git`
1. Replace in all files `YOUR-PLUGIN-NAME` with your plugin name
1. Update `package.json`
1. Install dependencies `npm i` and run the local server `npm start`
1. Start creating your plugin from `src/index.js`
1. Show some gif/demo if possible
1. Update README
1. When you're ready update the production file `npm run build`
1. Publish




## Summary

* Plugin name: `YOUR-PLUGIN-NAME`
* Components: `new-component1`, `new-component2`, ...
* Blocks: `new-block1`, `new-block1`, ...
...





## Options

* `option1` Description option, default: `default value`





## Download

* `npm i YOUR-PLUGIN-NAME` or `yarn add YOUR-PLUGIN-NAME`





## Usage

```html
<link href="path/to/grapes.min.css" rel="stylesheet"/>
<script src="path/to/grapes.min.js"></script>
<script src="path/to/YOUR-PLUGIN-NAME.min.js"></script>

<div id="gjs"></div>

<script type="text/javascript">
  var editor = grapesjs.init({
      container : '#gjs',
      ...
      plugins: ['YOUR-PLUGIN-NAME'],
      pluginsOpts: {
        'YOUR-PLUGIN-NAME': {
          // options
        }
      }
  });
</script>
```





## Development

Clone the repository

```sh
$ git clone https://github.com/YOUR-NAME/YOUR-PLUGIN-NAME.git
$ cd YOUR-PLUGIN-NAME
```

Install it

```sh
$ npm i
```

Start the dev server

```sh
$ npm start
```

Build before the commit. This will also increase the patch level version of the package

```sh
$ npm run build
```





## License

BSD 3-Clause
