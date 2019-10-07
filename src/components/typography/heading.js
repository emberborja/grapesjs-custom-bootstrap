export default (config) => {
    const headingComponent = config.constants.components.typography.heading;
    const headingTypes = headingComponent.tags;
    let heading = {
        type: headingComponent.id,
        methods: {
            isComponent: (el) => {
                if (el && el.tagName && headingTypes.includes(el.tagName)) {
                    return { type: headingComponent.id }
                }
            },
            extend: 'text',
            model: {
                defaults: {
                    tagName: 'H1',
                    name: 'Heading',
                    draggable: '[class|="col"]',
                    traits:[{
                        type: 'select',
                        label: 'Heading Type',
                        name: 'tagName',
                        changeProp: 1,
                        options: headingTypes.map(type => { return {id: type, name: type} } )
                    }]
                },
            },
            extendView: 'text',
            view: {},
        }
    }
    return heading;
}