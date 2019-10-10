export default (config) => {
    const { tabledata } = config.constants.components.tables;
   
    let tabledata_component = {
        type: tabledata.id,
        methods: {
            model: {
                
                isComponent(el) {
                    let result = '';
                    if(el.tagName == 'TD') {
                        result = {
                            type: 'cell',
                            tagName: tag.toLowerCase()
                        };
                    }
                    return result;
                },

                defaults: {
                    name: 'Table Data',
                    draggable: ['tbody tr'],
                    traits: [
                        'id',
                        'title',
                        {
                            type: 'select',
                            label: 'Context Class',
                            name: 'class',
                            options: [
                                { id: ' ', name: 'none' },
                                ...tabledata.classes.map(contextClass => ({
                                    id: contextClass, name: contextClass
                                }))
                            ] 
                        }
                    ]
                },
            
            },

        }
    }
    return tabledata_component;
}