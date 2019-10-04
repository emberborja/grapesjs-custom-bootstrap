import {constants} from '../';

export default (editor, config={}) => {
    const { bsHeadingBlockId } = constants.blockIds;
    const { bsHeadingComponentId } = constants.componentIds;
    let column = {
        id: bsHeadingBlockId,
        opts: {
            label: 'Heading',
            category: 'Typography',
            attributes: { class: "fa fa-heading" },
            content: {
                type: bsHeadingComponentId,
                    components: [{
                        type: 'textnode',
                        content: 'this is a heading, use traits tab',
                    }]
            }
        }
    }
    return column;
}