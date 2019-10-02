import {constants} from '../';

export default (editor, config={}) => {
    const { bsRowBlockId } = constants.blockIds;
    const { bsRowComponentId } = constants.componentIds;
    
    let row = {
        id: bsRowBlockId,
        opts: {
            label: 'Row',
            category: 'Layout',
            attributes: { class: 'fa fa-minus' },
            content: {
              type: bsRowComponentId,
              classes: ['row']
            }
        }
    }

    return row;
}