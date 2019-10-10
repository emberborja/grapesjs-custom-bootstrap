export default (config) => {
    const { tablehead } = config.constants.components.tables;
   
    let tablehead_component = {
        type: tablehead.id,
        methods: {
            model: {
                
                isComponent(el) {
                    let result = '';
                    if(tablehead.tags.includes(el.tagName) ) {
                        result = {
                            type: tablehead.id,
                            tagName: tag.toLowerCase()
                        };
                    }
                    return result;
                },

                defaults: {
                    name: 'Table Head',
                    draggable: ['table'],
                    traits: [
                        'id',
                        'title',
                    ]
                },
            
            },

        }
    }
    return tablehead_component;
}