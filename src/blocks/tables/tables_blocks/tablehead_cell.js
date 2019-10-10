export default (editor, config) => {
    const blockId = config.constants.blocks.tables.tablehead_cell.id;
    const tablehead_cell = config.constants.components.tables.tablehead_cell;
    
    let tablehead_cell_block = {
        id: blockId,
        opts: {
            label: 'Table Header Cell',
            category: 'Tables',
            attributes: { class: "fa fa-square-o" },
            content: {
                type: tablehead_cell.id,
                content: 'Column Header',
            }
        }
    }
    return tablehead_cell_block;
}