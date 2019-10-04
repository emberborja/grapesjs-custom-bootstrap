import {constants} from '../';
const blockId = constants.blocks.gridsystem.column.id;
const { column } = constants.components.gridsystem;

export default (editor, config={}) => {
    let column_block = {
        id: blockId,
        opts: {
            label: 'Column',
            category: 'Layout',
            attributes: { class: 'fa fa-square' },
            content: {
                type: column.id,
                components: [{
                    tagName: 'p',
                    type: 'text',
                    components: [{
                        type: 'textnode',
                        content: 'this is a column, use settings tab',
                    }]
                }],
            }
        }
    }
    return column_block;
}