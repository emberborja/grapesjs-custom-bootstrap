export default (config) => {
    const abbreviationComponent = config.constants.components.typography.abbreviation;
    let abbreviation = {
        type: abbreviationComponent.id,
        methods: {
            isComponent: (el) => {
                if (el && el.tagName && (el.tagName === 'P' || el.tagName === 'p' )) {
                    return { type: Component.id }
                }
            },
            extend: 'text',
            model: {
                defaults: {
                    tagName: abbreviationComponent.tags,
                    name: 'Abbreviation',
                    draggable: 'p',
                    traits:[
                        'id',
                        'title',
                        {
                            type: 'select',
                            label: 'Initialism',
                            name: 'class',
                            options: abbreviationComponent.classes.map( bootstrap_class => { return {id: bootstrap_class, name: bootstrap_class} } )
                    }]
                },
            },
            extendView: 'text',
            view: {},
        }
    }
    return abbreviation;
}