export default (config) => {
    const listComponent = config.constants.components.typography.list;
    const listTypes = listComponent.tags;
    let list = {
        type: listComponent.id,
        methods: {
            isComponent: (el) => {
                if (el && el.tagName && listTypes.includes(el.tagName)) {
                    return { type: listComponent.id }
                }
            },
            extend: 'text',
            model: {
                defaults: {
                    tagName: 'UL',
                    name: 'List',
                    draggable: '[class|="col"]',
                    components: `<li>This is a list</li>
                        <li>Change this to a numbered list in the traits tab</li>
                        <li>Lists can be horrizontal; add the class list-inline</li>
                        <li>Make this list unstyled by adding class list-unstyled</li>`,
                    traits: [ 
                        'id',
                        'title',
                        {
                            type: 'select',
                            label: 'List Type',
                            name: 'tagName',
                            changeProp: 1,
                            options: listTypes.map(type => { return {id: type, name: type} } )
                        },
                        {
                            type: 'checkbox',
                            label: 'No List Styleing',
                            name: 'class',
                            valueTrue: 'list-unstyled',
                            valueFalse: 'GJS_NO_CLASS',
                        },
                        {
                            type: 'checkbox',
                            label: 'Inline List',
                            name: 'class',
                            valueTrue: 'list-inline',
                            valueFalse: 'GJS_NO_CLASS',
                        },
                    ]
                },
            },
            extendView: 'text',
            view: {},
        }
    }
    return list;
}