import {constants} from '../';

export default (defaultModel, defaultView) => {
    const { bsRowComponentId, bsColumnComponentId } = constants.componentIds;

    let row = {
        type: bsRowComponentId,
        methods: {
            isComponent : (el) => {
                    if (el && el.classList && el.classList.contains('row')) {
                        return { type: 'row' }
                    }
                },
            model: {
                defaults: {
                    name: 'Row',
                    tagName: 'div',
                    draggable: '.container, .container-fluid',
                    droppable: '[class|="col"]',
                    attributes: {
                        class: 'row',
                    },
                    components: [{
                        type: bsColumnComponentId,
                        attributes: { class: 'col-xs-12' },
                        components: [{
                            tagName: 'p',
                            type: 'text',
                            components: [{
                                type: 'textnode',
                                content: 'col-xs-12'
                            }]
                        }]
                    }],
                }
            },
            // view: {},
        }
    };

    return row;
}