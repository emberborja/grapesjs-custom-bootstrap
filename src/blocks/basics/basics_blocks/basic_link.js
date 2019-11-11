export default (editor, config) => {
    const blockId = config.constants.blocks.basics.basic_link.id;
    const { basic_link } = config.constants.components.basics;
    let basic_link_block = {
        id: blockId,
        opts: {
            label: 'Link',
            category: 'Basics',
            attributes: { class: 'fa fa-link' },
            content: {
                type: basic_link.id,
            }
        }
    }
    return basic_link_block;
}