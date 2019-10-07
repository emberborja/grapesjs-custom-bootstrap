export default (editor, config) => {
    const blockId = config.constants.blocks.typography.descriptionlist.id;
    const { descriptionlist } = config.constants.components.typography;
    let descriptionlist_block = {
        id: blockId,
        opts: {
            label: 'Description List',
            category: 'Typography',
            attributes: { class: "fa fa-th-list" },
            content: {
                type: descriptionlist.id,
                    components: `
                    <dt>Description lists</dt>
                        <dd>A description list is perfect for defining terms.</dd>
                    <dt>Horizontal</dt>
                        <dd>You can make this list horizontal in the traits panel.</dd>
                        <dd>Select the list by hitting the up arrow in the blue select box.</dd>
                    <dt>Selection Help</dt>
                        <dd>The Layers panel helps to find components that are hard to click.</dd>`,
            }
        }
    }
    return descriptionlist_block;
}