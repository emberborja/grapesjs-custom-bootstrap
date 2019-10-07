export default (editor, config) => {
    const blockId = config.constants.blocks.typography.list.id;
    const { list } = config.constants.components.typography;
    let list_block = {
        id: blockId,
        opts: {
            label: 'List',
            category: 'Typography',
            attributes: { class: "fa fa-list" },
            content: {
                type: list.id,
            }
        }
    }
    return list_block;
}