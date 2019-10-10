export default (editor, config) => {
    const blockId = config.constants.blocks.tables.tablefoot.id;
    const { tablefoot, tablerow, tabledata } = config.constants.components.tables;
    
    let tablefoot_block = {
        id: blockId,
        opts: {
            label: 'Table Foot',
            category: 'Tables',
            attributes: { class: "fa fa-square-o" },
            content: {
                type: tablefoot.id,
                components: {
                    type: tablerow.id,
                    components: [
                        {
                            type: tabledata.id,
                            tagName: 'th',
                            content: 'data'
                        },
                        {
                            type: tabledata.id,
                            tagName: 'th',
                            content: 'data'
                        },
                        {
                            type: tabledata.id,
                            tagName: 'th',
                            content: 'data'
                        },
                        {
                            type: tabledata.id,
                            tagName: 'th',
                            content: 'data'
                        },
                    ]
                }
            }
        }
    }
    return tablefoot_block;
}