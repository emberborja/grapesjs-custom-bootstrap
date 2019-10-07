export default (editor, config) => {
    const blockId = config.constants.blocks.gridsystem.row.id;
    const { row, column } = config.constants.components.gridsystem;
    const { heading, paragraph } = config.constants.components.typography;
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
                    components: [
                        {
                            type: heading.id,
                            components:
                                {
                                    type: 'textnode',
                                    content: 'Rows - horizontal containers for columns'
                                }
                        },
                        {
                            type: paragraph.id,
                            components: 
                                {
                                    type: 'textnode',
                                    content: 'Change column traits in the traits tab. This is col-xs-12; put your content within columns.'
                                }
                        }
                    ]
                },
            }
        }
    }
    return row_block;
}