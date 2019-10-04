import grid_system from './grid_system/';
import typography from './typography/';
export {constants} from '../';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  const addBlocks = collection => collection.forEach(block => bm.add(block.id, block.opts));
  let allBlocks = [
    grid_system(editor, config),
    typography(editor, config)
  ];
  allBlocks.forEach(addBlocks);
}
