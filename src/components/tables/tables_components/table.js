export default (config) => {
    const { table } = config.constants.components.tables;
   
    let table_component = {
        type: 'table',
        methods: {
            model: {
                defaults: {
                    name: 'Table',
                    draggable: '[class|="col"]',
                },
            },
        }
    }
    return table_component;
}