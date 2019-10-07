export default (config) => {
    const rowComponentId = config.constants.components.gridsystem.row.id;
    let row = {
        type: rowComponentId,
        methods: {
            isComponent : (el) => {
                if (el && el.classList && el.classList.contains('row')) {
                    return { type: rowComponentId }
                }
            },
            extend: 'default',
            model: {
                defaults: {
                    name: 'Row',
                    draggable: '.container, .container-fluid, [class|="col"]',
                    droppable: '[class|="col"]',
                    classes: ['row'],
                },
            },
            extendView: 'default',
            view: {},
        }
    };
    return row;
}