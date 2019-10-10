export default (config) => {
    const { tablerow } = config.constants.components.tables;
   
    let tablerow_component = {
        type: tablerow.id,
        methods: {
            model: {
                
                isComponent(el) {
                    let result = '';
                    if(el.tagName == 'TR' || el.tagName == 'tr' ) {
                        result = {
                            type: tablerow.id,
                            tagName: tag.toLowerCase()
                        };
                    }
                    return result;
                },

                defaults: {
                    name: 'Table Row',
                    draggable: ['tbody'],
                    traits: [
                        'id',
                        'title',
                        {
                            type: 'select',
                            label: 'Context Class',
                            name: 'class',
                            options: [
                                { id: ' ', name: 'none' },
                                ...tablerow.classes.map(contextClass => ({
                                    id: contextClass, name: contextClass
                                }))
                            ] 
                        }
                    ]
                },
            
            },

        }
    }
    return tablerow_component;
}