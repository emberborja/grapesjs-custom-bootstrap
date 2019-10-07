export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.column.id;
    const { column } = config.constants.components.gridsystem;
    const { paragraph } = config.constants.components.typography;
    let column_block = {
        id: blockId,
        opts: {
            label: 'Column',
            category: 'Layout',
            attributes: { class: 'fa fa-square' },
            content: {
                type: column.id,
                components: [{
                    type: paragraph.id,
                    components: [{
                        type: 'textnode',
                        content: 'This is a column; use settings tab to change its width.',
                    }]
                }],
            }
        }
    }
    return column_block;
}