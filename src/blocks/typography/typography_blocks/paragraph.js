export default (editor, config) => {
    const blockId = config.constants.blocks.typography.paragraph.id;
    const { paragraph } = config.constants.components.typography;
    let paragraph_block = {
        id: blockId,
        opts: {
            label: 'Text',
            category: 'Typography',
            attributes: { class: "fa fa-font" },
            content: {
                type: paragraph.id,
                    components: [{
                        type: 'textnode',
                        content: 'This is a paragraoh; use the traits tab.',
                    }]
            }
        }
    }
    return paragraph_block;
}