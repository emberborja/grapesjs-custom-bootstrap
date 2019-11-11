export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.column_9_3.id;
    const { row, column } = config.constants.components.gridsystem;
    const { paragraph } = config.constants.components.typography;
    let column_9_3_block = {
        id: blockId,
        opts: {
            label: 'Column 9/3',
            category: 'Layout',
            attributes: { class: 'fa fa-columns' },
            content: {
                type: row.id,
                components: [{
                    type: column.id,
                    classes: ['col-xs-9'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 9',
                        }]
                    }],
                },{
                    type: column.id,
                    classes: ['col-xs-3'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 3',
                        }]
                    }],
                }],
            },
        }
    }
    return column_9_3_block;
}