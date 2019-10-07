export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.row.id;
    const { row, column } = config.constants.components.gridsystem;
    let row_block = {
        id: blockId,
        opts: {
            label: 'Row',
            category: 'Layout',
            attributes: { class: 'fa fa-minus' },
            content: {
                type: row.id,
                components: {
                    type: column.id,
                    components: [{
                        tagName: 'p',
                        type: 'text',
                        components: [{
                            type: 'textnode',
                            content: 'col-xs-12'
                        }]
                    }]
                },
            }
        }
    }
    return row_block;
}