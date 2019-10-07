export default (config) => {
    const blockquoteComponent = config.constants.components.typography.blockquote;
    let blockquote = {
        type: blockquoteComponent.id,
        methods: {
            isComponent: (el) => {
                if (el && el.tagName && el.tagName === blockquoteComponent.tags ) {
                    return { type: blockquoteComponent.id }
                }
            },
            extend: 'text',
            model: {
                defaults: {
                    tagName: blockquoteComponent.tags,
                    name: 'Blockquote',
                    draggable: '[class|="col"]',
                    components: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                    <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>`,
                    traits: [
                        'id',
                        'title',
                        {
                            type: 'select',
                            label: 'Helper Classes',
                            name: 'class',
                            options: blockquoteComponent.classes.map( bootstrap_class => { return {id: bootstrap_class, name: bootstrap_class} } )
                        }
                    ],
                },
            },
            extendView: 'text',
            view: {},
        }
    }
    return blockquote;
}