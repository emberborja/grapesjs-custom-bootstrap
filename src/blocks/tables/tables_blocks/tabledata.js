export default (editor, config) => {
    const blockId = config.constants.blocks.tables.tabledata.id;
    const tabledata = config.constants.components.tables.tabledata;
    
    let tabledata_block = {
        id: blockId,
        opts: {
            label: 'Table Cell',
            category: 'Tables',
            attributes: { class: "fa fa-square-o" },
            content: {
                type: tabledata.id,
                content: 'data',
            }
        }
    }
    return tabledata_block;
}