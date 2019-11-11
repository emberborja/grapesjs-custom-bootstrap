export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.column_3_6_3.id;
    const { row, column } = config.constants.components.gridsystem;
    const { paragraph } = config.constants.components.typography;
    let column_3_6_3_block = {
        id: blockId,
        opts: {
            label: 'Column 3/6/3',
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
                    classes: ['col-xs-6'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 6',
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
    return column_3_6_3_block;
}