import {constants} from '../';

export default (editor, config={}) => {
    const { bsContainerBlockId } = constants.blockIds;
    const { bsContainerComponentId } = constants.componentIds;
    let container = {
        id: bsContainerBlockId,
        opts: {
            label: 'Container',
            category: 'Layout',
            attributes: { class: 'fa fa-square-o' },
            content: {
              type: bsContainerComponentId,
              classes: ['container']
            }
        }
    }

    return container;
}