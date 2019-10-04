import {constants} from '../';

export default () => {
    const { bsParagraphComponentId } = constants.componentIds;
    // const { } = constants;
    const headingTypes = ['H1', 'H2', 'H3',  'H4',  'H5',  'H6',];
    let heading = {
        type: bsHeadingComponentId,
        methods: {
            isComponent: (el) => {
                if (el && el.tagName && headingTypes.includes(el.tagName)) {
                    return { type: bsHeadingComponentId }
                }
            },
            extend: 'text',
            model: {
                defaults: {
                    tagName: 'H1',
                    name: 'Heading',
                    draggable: '[class|="col"]',
                    traits:[{
                        type: 'select',
                        label: 'Heading Type',
                        name: 'tagName',
                        changeProp: 1,
                        options: headingTypes.map(type => { return {id: type, name: type} } )
                    }]
                },
            },
            extendView: 'text',
            view: {},
        }
    }
    return heading;
}