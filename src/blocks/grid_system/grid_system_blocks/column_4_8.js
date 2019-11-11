export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.column_4_8.id;
    const { row, column } = config.constants.components.gridsystem;
    const { paragraph } = config.constants.components.typography;
    let column_4_8_block = {
        id: blockId,
        opts: {
            label: 'Column 4/8',
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
                    classes: ['col-xs-8'],
                    components: [{
                        type: paragraph.id,
                        components: [{
                            type: 'textnode',
                            content: 'column - 8',
                        }]
                    }],
                }],
            },
        }
    }
    return column_4_8_block;
}