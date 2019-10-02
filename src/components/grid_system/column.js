import {constants} from '../';

export default () => {
    const { bsColumnComponentId } = constants.componentIds;
    let cols = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    let column = {
      type: bsColumnComponentId,
      methods: {
        isComponent: (el) => {
          if (el && el.className && el.className.match(/col-(xs|sm|md|lg)-\d+/)) {
            return { type: 'column' }
          }
        },
        model: {
          defaults: {
            name: 'Column',
            draggable: '.row',
            droppable: true,
            components: [{
              tagName: 'p',
              type: 'text',
              components: [{
                type: 'textnode',
                content: 'this is a column, use settings tab',
              }]
            }],
            traits: [
              {
              type: 'select-class',
              options: [
                {value: '', name: 'None'},
                ...cols.map((i) => ({ value: `col-xs-${i}`, name: `${i}/12` }))
              ],
              label: 'XS size'
              }, {
                type: 'select-class',
                options: [
                  {value: '', name: 'None'},
                  ...cols.map((i) => ({ value: `col-sm-${i}`, name: `${i}/12` }))
                ],
                label: 'SM size'
              }, {
                type: 'select-class',
                options: [
                  {value: '', name: 'None'},
                  ...cols.map((i) => ({ value: `col-md-${i}`, name: `${i}/12` }))
                ],
                label: 'MD size'
              }, {
                type: 'select-class',
                options: [
                  {value: '', name: 'None'},
                  ...cols.map((i) => ({ value: `col-lg-${i}`, name: `${i}/12` }))
                ],
                label: 'LG size'
              }, {
                type: 'select-class',
                options: [
                  {value: '', name: 'None'},
                  ...cols.map((i) => ({ value: `col-xs-offset-${i}`, name: `${i}/12` }))
                ],
                label: 'XS offset'
              }, {
                type: 'select-class',
                options: [
                  {value: '', name: 'None'},
                  ...cols.map((i) => ({ value: `col-sm-offset-${i}`, name: `${i}/12` }))
                ],
                label: 'SM offset'
              }, {
                type: 'select-class',
                options: [
                  {value: '', name: 'None'},
                  ...cols.map((i) => ({ value: `col-md-offset-${i}`, name: `${i}/12` }))
                ],
                label: 'MD offset'
              }, {
                type: 'select-class',
                options: [
                  {value: '', name: 'None'},
                  ...cols.map((i) => ({ value: `col-lg-offset-${i}`, name: `${i}/12` }))
                ],
                label: 'LG offset'
              }]
          }
        },
        // view: {},
      }
    };

    return column;
}