export default (config) => {
    const { tablehead_cell } = config.constants.components.tables;
   
    let tablehead_cell_component = {
        type: tablehead_cell.id,
        methods: {
            model: {
                
                isComponent(el) {
                    let result = '';
                    if(el.tagName == 'TH' || el.tagName == 'th') {
                        result = {
                            type: tablehead_cell.id,
                            // tagName: tag.toLowerCase()
                        };
                    }
                    return result;
                },

                defaults: {
                    name: 'Table Header',
                    type: tablehead_cell.id,
                    tagName: 'TH',
                    draggable: ['thead tr'],
                    traits: [
                        'id',
                        'title',
                        {
                            type: 'select',
                            label: 'Context Class',
                            name: 'class',
                            options: [
                                { id: ' ', name: 'none' },
                                ...tablehead_cell.classes.map(contextClass => ({
                                    id: contextClass, name: contextClass
                                }))
                            ] 
                        }
                    ]
                },
            
            },

        }
    }
    return tablehead_cell_component;
}