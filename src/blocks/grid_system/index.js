import container from './grid_system_blocks/container';
import row from './grid_system_blocks/row';
import column from './grid_system_blocks/column';
export {constants} from '../';

export default (editor, config={}) => {
    let grid_system_blocks = [
        container(editor, config),
        row(editor, config),
        column(editor, config),
    ];
    
    return grid_system_blocks;
}

