import loadComponents from './components/';
import loadBlocks from './blocks/';
import devices from './devices/';
import panels from './panels/';
import traits from './traits/';
export {constants} from './constants/';

export default (editor, opts = {}) => {
  const options = { ...{
    // default options
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
      </style>
    `)
  }

  // Add traits
  traits(editor, options); 

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Add devices
  devices(editor);

  // Add custom panels
  panels(editor);

  // TODO Remove
  editor.on('load', () => editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin AWESOME! </div>`, { at: 1 }))
};
