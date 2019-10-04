import {constants} from '../';
const blockId = constants.blocks.gridsystem.container.id;
const { container, row, column } = constants.components.gridsystem;

export default (editor, config={}) => {
    let container_block = {
        id: blockId,
        opts: {
            label: 'Container',
            category: 'Layout',
            attributes: { class: 'fa fa-square-o' },
            content: {
                type: container.id,
                components: [{
                        type: row.id,
                        components: [{
                            type: column.id,
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
    return container_block;
}