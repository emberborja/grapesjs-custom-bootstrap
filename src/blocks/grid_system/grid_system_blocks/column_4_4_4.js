export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.column_4_4_4.id;
    const { row, column } = config.constants.components.gridsystem;
    const { paragraph } = config.constants.components.typography;
    let column_4_4_4_block = {
        id: blockId,
        opts: {
            label: 'Column 4/4/4',
            category: 'Layout',
            attributes: { class: 'fa fa-columns' },
            content: {
                type: row.id,
                components: [{
                    type: column.id,
                    classes: ['col-xs-4'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 4',
                        }]
                    }],
                },{
                    type: column.id,
                    classes: ['col-xs-4'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 4',
                        }]
                    }],
                },{
                    type: column.id,
                    classes: ['col-xs-4'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 4',
                        }]
                    }],
                }],
            },
        }
    }
    return column_4_4_4_block;
}