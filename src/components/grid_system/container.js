export default (config) => {
    const containerComponentId = config.constants.components.gridsystem.container.id;
    let container = {
        type: containerComponentId,
        methods: {
            isComponent: (el) => {
                if (el && el.classList && (el.classList.contains('container') || el.classList.contains('container-fluid'))) {
                    return { type: containerComponentId }
                }
            },
            extend: 'default',
            model: {
                defaults: {
                    name: 'Container',
                    draggable: ':not(.container), :not(.container-fluid)',
                    droppable: '.row',
                    classes: ['container'],
                    traits:[{
                        type: 'select',
                        label: 'Type',
                        name: 'class',
                        options: [
                            { id: 'container', name: 'Fixed' },
                            { id: 'container-fluid', name: 'Fluid' }
                        ]
                    }]
                },
            },
            extendView: 'default',
            view: {},
        }
    }
    return container;
}