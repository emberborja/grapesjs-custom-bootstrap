import {constants} from '../';

export default (editor, config={}) => {
    const { bsContainerBlockId } = constants.blockIds;
    const { bsContainerComponentId, bsRowComponentId, bsColumnComponentId } = constants.componentIds;
    let container = {
        id: bsContainerBlockId,
        opts: {
            label: 'Container',
            category: 'Layout',
            attributes: { class: 'fa fa-square-o' },
            content: {
                type: bsContainerComponentId,
                components: [{
                        type: bsRowComponentId,
                        components: [{
                            type: bsColumnComponentId,
                            components: [{
                                tagName: 'h1',
                                type: 'text',
                                components: {
                                    type: 'textnode',
                                    content: 'Bootstrap grid examples',
                                }
                            }, {
                                tagName: 'p',
                                type: 'text',
                                classes: ['lead'],
                                components: {
                                    type: 'textnode',
                                    content: 'Basic grid layouts to get you familiar with building within the Bootstrap grid system.',
                                }
                            }],
                        }]
                    }]
            }
        }
    }
    return container;
}