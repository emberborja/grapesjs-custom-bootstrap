import loadComponents from './components/';
import loadBlocks from './blocks/';
import devices from './devices/';
import panels from './panels/';
import traits from './traits/';
import {constants} from './constants/';

export default (editor, opts = {}) => {
  const options = { ...{
    constants
  },  ...opts };

  if (options.addBasicStyle) {
    editor.addComponents(`
      <style>
        .gjs-dashed .container, .gjs-dashed .container-fluid, .gjs-dashed .row, .gjs-dashed .row > [class*="col-"], .gjs-dashed .dropdown-menu {
          min-height: 50px;
        }
        .gjs-dashed .dropdown-menu {
          display: block;
        }
        body { background-color: #ddd }
      </style>
    `)
  }

  editor.on('load', () => editor.addComponents(`<div class="container" style="height:100%; background-color: white;"><h1>Click the <span class="glyphicon glyphicon-question-sign"></span> button above for more info.</h1></div>`, { at: 0 }))

  // Add components
  loadComponents(editor, options);

  // Add traits
  traits(editor, options); 

  // Add blocks
  loadBlocks(editor, options);

  // Add devices
  devices(editor);

  // Add custom panels
  panels(editor);

};
