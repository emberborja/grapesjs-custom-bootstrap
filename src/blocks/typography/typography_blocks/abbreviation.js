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
                        content: 'HTML',
                    }]
            }
        }
    }
    return abbreviation_block;
}