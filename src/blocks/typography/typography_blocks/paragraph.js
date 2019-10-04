import {constants} from '../';
const blockId = constants.blocks.typography.paragraph.id;
const { paragraph } = constants.components.typography;

export default (editor, config={}) => {
    let paragraph_block = {
        id: blockId,
        opts: {
            label: 'Text',
            category: 'Typography',
            attributes: { class: "fa fa-font" },
            content: {
                type: paragraph.id,
                    components: [{
                        type: 'textnode',
                        content: 'This is a paragraoh; use the traits tab.',
                    }]
            }
        }
    }
    return paragraph_block;
}