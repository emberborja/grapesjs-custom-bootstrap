import grid_system from './grid_system/';
// import {constants} from '../';
export {constants} from '../';

export default (editor, config = {}) => {
  const bm = editor.BlockManager;
  // const blockIds = constants.blockIds;
  // const addBlock = (id, opts) => (Object.keys(blockIds).indexOf(id) >= 0) ? bm.add(id, opts) : null;
  
  const grid_system_blocks = grid_system(editor, config);
  grid_system_blocks.forEach(block => bm.add(block.id, block.opts));
}
