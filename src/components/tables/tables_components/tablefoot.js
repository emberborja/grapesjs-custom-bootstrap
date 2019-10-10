export default (config) => {
    const { tablefoot } = config.constants.components.tables;
   
    let tablefoot_component = {
        type: tablefoot.id,
        methods: {
            model: {
                isComponent(el) {
                    let result = '';
                    if(tablefoot.tags.includes(el.tagName) ) {
                        result = {
                            type: tablefoot.id,
                            tagName: tag.toLowerCase()
                        };
                    }
                    return result;
                },

                defaults: {
                    name: 'Table Foot',
                    draggable: ['table'],
                    traits: [
                        'id',
                        'title',
                    ]
                },
            
            },

        }
    }
    return tablefoot_component;
}