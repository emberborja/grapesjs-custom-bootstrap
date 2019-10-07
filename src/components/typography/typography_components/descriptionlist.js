export default (config) => {
    const descriptionlistComponent = config.constants.components.typography.descriptionlist;
    let descriptionlist = {
        type: descriptionlistComponent.id,
        methods: {
            isComponent: (el) => {
                if (el && el.tagName && el.tagName === descriptionlistComponent.tags ) {
                    return { type: descriptionlistComponent.id }
                }
            },
            extend: 'text',
            model: {
                defaults: {
                    tagName: descriptionlistComponent.tags,
                    name: 'description list',
                    draggable: '[class|="col"]',
                    traits:[
                        'id',
                        'title',
                        {
                            type: 'checkbox',
                            label: 'Horizontal',
                            name: 'class',
                            valueTrue: 'dl-horizontal',
                            valueFalse: 'GJS_NO_CLASS',
                    }]
                },
            },
            extendView: 'text',
            view: {},
        }
    }
    return descriptionlist;
}