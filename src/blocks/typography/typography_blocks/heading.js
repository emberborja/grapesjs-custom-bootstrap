export default (editor, config) => {
    const blockId = config.constants.blocks.typography.heading.id;
    const { heading } = config.constants.components.typography;
    let heading_block = {
        id: blockId,
        opts: {
            label: 'Heading',
            category: 'Typography',
            attributes: { class: "fa fa-header" },
            content: {
                type: heading.id,
                    components: [{
                        type: 'textnode',
                        content: 'this is a heading, use traits tab',
                    }]
            }
        }
    }
    return heading_block;
}