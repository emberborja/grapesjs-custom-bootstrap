export default (editor, config) => {
    const blockId = config.constants.blocks.typography.address.id;
    const { address } = config.constants.components.typography;
    let address_block = {
        id: blockId,
        opts: {
            label: 'Address',
            category: 'Typography',
            attributes: { class: "fa fa-address-card" },
            content: {
                type: address.id,
            },
        }
    }
    return address_block;
}