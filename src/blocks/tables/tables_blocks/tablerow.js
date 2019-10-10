export default (editor, config) => {
    const blockId = config.constants.blocks.tables.tablerow.id;
    const { tablerow, tabledata } = config.constants.components.tables;
    
    let tablerow_block = {
        id: blockId,
        opts: {
            label: 'Table Row',
            category: 'Tables',
            attributes: { class: "fa fa-square-o" },
            content: {
                type: tablerow.id,
                components: [
                    {
                        type: tabledata.id,
                        content: 'data'
                    },
                    {
                        type: tabledata.id,
                        content: 'data'
                    },
                    {
                        type: tabledata.id,
                        content: 'data'
                    },
                    {
                        type: tabledata.id,
                        content: 'data'
                    },
                ]
            }
        }
    }
    return tablerow_block;
}