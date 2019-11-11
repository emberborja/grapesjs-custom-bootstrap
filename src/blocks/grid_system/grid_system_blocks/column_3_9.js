export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.column_3_9.id;
    const { row, column } = config.constants.components.gridsystem;
    const { paragraph } = config.constants.components.typography;
    let column_3_9_block = {
        id: blockId,
        opts: {
            label: 'Column 3/9',
            category: 'Layout',
            attributes: { class: 'fa fa-columns' },
            content: {
                type: row.id,
                components: [{
                    type: column.id,
                    classes: ['col-xs-3'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 3',
                        }]
                    }],
                },{
                    type: column.id,
                    classes: ['col-xs-9'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 9',
                        }]
                    }],
                }]
            },
        }
    }
    return column_3_9_block;
}