import grid_system from './grid_system/';
import typography from './typography/';
import tables from './tables';
import forms from './forms';

export default (editor, config) => {
  const bm = editor.BlockManager;
  const addBlocks = collection => collection.forEach(block => bm.add(block.id, block.opts));
  let allBlocks = [
    grid_system(editor, config),
    typography(editor, config),
    tables(editor, config),
    forms(editor, config),
  ];
  allBlocks.forEach(addBlocks);
}
