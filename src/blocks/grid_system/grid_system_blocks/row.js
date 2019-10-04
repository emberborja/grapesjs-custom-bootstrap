import {constants} from '../';

export default (editor, config={}) => {
    const { bsRowBlockId } = constants.blockIds;
    const { bsRowComponentId, bsColumnComponentId } = constants.componentIds;
    let row = {
        id: bsRowBlockId,
        opts: {
            label: 'Row',
            category: 'Layout',
            attributes: { class: 'fa fa-minus' },
            content: {
                type: bsRowComponentId,
                components: {
                    type: bsColumnComponentId,
                    components: [{
                        tagName: 'p',
                        type: 'text',
                        components: [{
                            type: 'textnode',
                            content: 'col-xs-12'
                        }]
                    }]
                },
            }
        }
    }
    return row;
}