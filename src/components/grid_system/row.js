import {constants} from '../';

export default () => {
    const { bsRowComponentId } = constants.componentIds;
    let row = {
        type: bsRowComponentId,
        methods: {
            isComponent : (el) => {
                if (el && el.classList && el.classList.contains('row')) {
                    return { type: bsRowComponentId }
                }
            },
            extend: 'default',
            model: {
                defaults: {
                    name: 'Row',
                    draggable: '.container, .container-fluid, [class|="col"]',
                    droppable: '[class|="col"]',
                    classes: ['row'],
                },
            },
            extendView: 'default',
            view: {},
        }
    };
    return row;
}