import {constants} from '../';
const blockId = constants.blocks.typography.heading.id;
const { heading } = constants.components.typography;

export default (editor, config={}) => {
    let heading_block = {
        id: blockId,
        opts: {
            label: 'Heading',
            category: 'Typography',
            attributes: { class: "fa fa-header" },
            content: {
                type: heading.id,
                    components: [{
                        type: 'textnode',
                        content: 'this is a heading, use traits tab',
                    }]
            }
        }
    }
    return heading_block;
}