import {constants} from '../';

export default (defaultModel, defaultView) => {
    const { bsContainerComponentId, bsRowComponentId, bsColumnComponentId } = constants.componentIds;

    let container = {
        type: bsContainerComponentId,
        methods: {
            isComponent: (el) => {
                if (el && el.classList && (el.classList.contains('container') || el.classList.contains('container-fluid'))) {
                    return { type: 'container' }
                }
            },
            model: {
                defaults: {
                    name: 'Container',
                    tagName: 'div',
                    draggable: ':not(.container), :not(.container-fluid)',
                    droppable: '.row',
                    attributes: {
                        class: 'container',
                        style: 'min-height: 50px',
                    },
                    components: [
                        {
                            tagName: 'h1',
                            type: 'text',
                            components: [{
                                type: 'textnode',
                                content: 'Bootstrap grid examples',
                            }]
                        }, {
                            tagName: 'p',
                            type: 'text',
                            attributes: {class: 'lead'},
                            components: [{
                                type: 'textnode',
                                content: 'Basic grid layouts to get you familiar with building within the Bootstrap grid system.',
                            }]
                        }, {
                            type: bsRowComponentId,
                            attributes: { class: 'row'},
                            components: [
                                {
                                    type: bsColumnComponentId,
                                    attributes: { class: 'col-xs-12'},
                                    components: {
                                        tagName: 'p',
                                        type: 'text',
                                        components: [{
                                            type: 'textnode',
                                            content: 'test test test',
                                        }]
                                    },
                                },
                                {
                                    type: bsColumnComponentId,
                                    attributes: { class: 'col-xs-12' },
                                    components: [{
                                        tagName: 'p',
                                        type: 'text',
                                        components: [{
                                            type: 'textnode',
                                            content: 'test test test',
                                        }]
                                    }],
                                }
                            ]
                        }
                    ],
                    traits:[
                        {
                            type: 'select-class',
                            label: 'Type',
                            options: [
                                { value: 'container', name: 'Fixed' },
                                { value: 'container-fluid', name: 'Fluid' }
                            ]
                        }
                    ]
                },
            },
            // view: {},
        }
    }

    return container;
}