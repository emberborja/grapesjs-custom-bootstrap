import {constants} from '../';

export default (editor, config={}) => {
    const { bsColumnBlockId } = constants.blockIds;
    const { bsColumnComponentId } = constants.componentIds;
    
    let column = {
        id: bsColumnBlockId,
        opts: {
            label: 'Column',
            category: 'Layout',
            attributes: { class: 'fa fa-square' },
            content: {
              type: bsColumnComponentId,
              classes: ['col']
            }
        }
    }

    return column;
}