import {constants} from '../';

export default () => {
    const { bsContainerComponentId } = constants.componentIds;
    let container = {
        type: bsContainerComponentId,
        methods: {
            isComponent: (el) => {
                if (el && el.classList && (el.classList.contains('container') || el.classList.contains('container-fluid'))) {
                    return { type: bsContainerComponentId }
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