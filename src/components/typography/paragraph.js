export default (config) => {
    const paragraphComponent = config.constants.components.typography.paragraph;
    let paragraph = {
        type: paragraphComponent.id,
        methods: {
            isComponent: (el) => {
                if (el && el.tagName && (el.tagName === 'P' || el.tagName === 'p' )) {
                    return { type: paragraphComponent.id }
                }
            },
            extend: 'text',
            model: {
                defaults: {
                    tagName: 'P',
                    name: 'Text',
                    draggable: '[class|="col"]',
                    traits:[{
                        type: 'select',
                        label: 'Helper Classes',
                        name: 'class',
                        changeProp: 1,
                        options: paragraphComponent.classes.map( bootstrap_class => { return {id: bootstrap_class, name: bootstrap_class} } )
                    }]
                },
            },
            extendView: 'text',
            view: {},
        }
    }
    return paragraph;
}