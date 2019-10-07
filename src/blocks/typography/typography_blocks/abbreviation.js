export default (editor, config) => {
    const blockId = config.constants.blocks.typography.abbreviation.id;
    const { abbreviation } = config.constants.components.typography;
    let abbreviation_block = {
        id: blockId,
        opts: {
            label: 'Abbreviation',
            category: 'Typography',
            attributes: { class: "fa fa-link" },
            content: {
                type: abbreviation.id,
                    components: [{
                        type: 'textnode',
                        content: 'This is an abbreviation; use the traits tab to add the full definition that will appear on hover.',
                    }]
            }
        }
    }
    return abbreviation_block;
}