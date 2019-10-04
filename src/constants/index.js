import { bootStrap3 } from './bootstrap3';
// TODO blockIds
// TODO componentIds

const blocks = {
    gridsystem: { 
        container: {id: 'container_block'},
        row: { id: 'row_block'},
        column: { id: 'column_block' },
    },
    typography: {
        heading: { id: 'heading_block'},
        paragraph: { id: 'paragraph_block'},
    },
}

const components = {
    gridsystem: { 
        container: {id: 'container_component'},
        row: { id: 'row_component'},
        column: { id: 'column_component' },
    },
    typography: {
        heading: { 
            id: 'heading_component',
            tags: bootStrap3.typography.headings.tags,
        },
        paragraph: { 
            id: 'paragraph_component',
            tags: ['p'],
            classes: [
                ...bootStrap3.typography.bodycopy.classes,
                ...bootStrap3.typography.alignment.classes,
                ...bootStrap3.typography.trasnformation.classes,
            ],
        }
    },
}

export const constants = {
    blocks: blocks,
    components: components,
};
