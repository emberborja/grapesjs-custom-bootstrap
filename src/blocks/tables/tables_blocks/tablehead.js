export default (editor, config) => {
    const blockId = config.constants.blocks.tables.tablehead.id;
    const { tablehead, tablerow, tabledata } = config.constants.components.tables;
    
    let tablehead_block = {
        id: blockId,
        opts: {
            label: 'Table Head',
            category: 'Tables',
            attributes: { class: "fa fa-square-o" },
            content: {
                type: tablehead.id,
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
                    ]
                }
            }
        }
    }
    return tablehead_block;
}