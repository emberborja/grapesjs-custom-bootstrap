import container from './grid_system_blocks/container';
import row from './grid_system_blocks/row';
import column from './grid_system_blocks/column';
import column_3_9 from './grid_system_blocks/column_3_9';
import column_9_3 from './grid_system_blocks/column_9_3';
import column_4_8 from './grid_system_blocks/column_4_8';
import column_8_4 from './grid_system_blocks/column_8_4';
import column_4_4_4 from './grid_system_blocks/column_4_4_4';
import column_3_6_3 from './grid_system_blocks/column_3_6_3';

export default (editor, config) => {
    let grid_system_blocks = [
        // container(editor, config),
        row(editor, config),
        column(editor, config),
        column_3_9(editor, config),
        column_9_3(editor, config),
        column_4_8(editor, config),
        column_8_4(editor, config),
        column_4_4_4(editor, config),
        column_3_6_3(editor, config),
    ];
    
    return grid_system_blocks;
}

