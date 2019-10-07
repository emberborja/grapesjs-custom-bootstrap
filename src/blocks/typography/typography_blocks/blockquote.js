export default (editor, config) => {
    const blockId = config.constants.blocks.typography.blockquote.id;
    const { blockquote } = config.constants.components.typography;
    let blockquote_block = {
        id: blockId,
        opts: {
            label: 'Block Quote',
            category: 'Typography',
            attributes: { class: "fa fa-quote-right" },
            content: {
                type: blockquote.id,
            },
        }
    }
    return blockquote_block;
}