export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.column.id;
    const { column } = config.constants.components.gridsystem;
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