export default (config) => {
    const { table } = config.constants.components.tables;
   
    let props = {};
    table.classes.forEach(element => props[element] = false );

    let table_component = {
        type: 'table',
        methods: {
            model: {
                defaults: {
                    name: 'Table',
                    draggable: '[class|="col"]',
                    classes: ['table'],
                    attributes: props,
                    traits: [
                        'id',
                        'title',
                        ...table.classes.map( (tableclass, index) => {
                            let label = tableclass.split('-');
                            label = label[label.length - 1];
                            return {
                                type: 'checkbox',
                                label: label,
                                name: tableclass,
                                valueTrue: tableclass,
                                valueFalse: false,
                            }
                        })
                    ],
                },
                
                updated(property, value, prevValue) {
                    if(property === 'attributes') {

                        let tmp = Object.values(value);

                        let tmp2 = tmp.filter(x=>x);

                        tmp2.unshift('table');

                        this.setClass(tmp2);
                    }
                },
            
            },

        }
    }
    return table_component;
}