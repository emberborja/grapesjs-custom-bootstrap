export default (config) => {
    const { table } = config.constants.components.tables;
   
    let table_responsive_component = {
        type: table.wrapper.id,
        methods: {
            model: {
                isComponent: (el) => {
                    if (el && el.tagName === 'DIV' && el.className === 'table-responsive' ) {
                        return { type: table.wrapper.id }
                    }
                },
                extend: 'default',
                defaults: {
                    name: 'Table Responsive Wrapper',
                    draggable: '[class|="col"]',
                    droppable: false,
                    editable: false,
                    classes: ['table-responsive'],
                },
            },

        }
    }
    return table_responsive_component;
}