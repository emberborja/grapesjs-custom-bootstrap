import { bootStrap3 } from './bootstrap3/bootstrap3';
// TODO blockIds and componentIds lists in order to have an easy array to do a find on? when filtering for active modules?

const contextClasses = ['active','success','warning','danger','info'];

export const constants = {

    blocks: {

        gridsystem: { 
            container: {id: 'container_block'},
            row: { id: 'row_block'},
            column: { id: 'column_block' },
        },

        typography: {
            heading: { id: 'heading_block'},
            paragraph: { id: 'paragraph_block'},
            abbreviation: { id: 'abbvreviation_block' },
            address: { id: 'address_block' },
            blockquote: { id: 'blockquote_block' },
            list: { id: 'list_block' },
            descriptionlist: { id: 'descriptionlist_block' },
        },

        tables: {
            table: { id: 'table_block' },
            table_responsive: { id: 'table_responsive_block' },
            tabledata: { id: 'tabledata_block' },
            tablehead_cell: { id: 'tablehead_cell_block' },
        },

    },

    components: {

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
                tags: ['P'],
                classes: [
                    ...bootStrap3.typography.bodycopy.classes,
                    ...bootStrap3.typography.alignment.classes,
                    ...bootStrap3.typography.trasnformation.classes,
                ],
            },

            abbreviation: {
                id: 'abbreviation_component',
                tags: 'ABBR',
                classes: ['initialism'],
                attributes: ['title'],
            },

            address: {
                id: 'address_component',
                tags: 'address',
            },

            blockquote: {
                id: 'blockquote_component', 
                tags: 'BLOCKQUOTE',
                classes: bootStrap3.typography.blockquotes.classes,
            },

            list: {
                id: 'list_component',
                tags: ['UL', 'OL'],
                classes: bootStrap3.typography.lists.classes,
            },

            descriptionlist: {
                id: 'descriptionlist_component',
                tags: 'DL',
                classes: ['dl-horizontal'],
            },

        },

        tables: {

            table: {
                id: 'table',
                tags: 'TABLE',
                classes: [
                    // 'table', 
                    'table-striped',
                    'table-bordered',
                    'table-hover',
                    'table-condensed'
                ],
                wrapper: {
                    id: 'table_responsive_wrapper_component',
                    tags: 'DIV',
                    classes: 'table-responsive',
                },
            },

            tablehead: {
                id: 'tablehead_component',
                tags: 'THEAD',
            },

            tablefoot: {
                id: 'tablehead_component',
                tags: 'TFOOT',
            },

            tablerow: {
                id: 'row',
                tags: 'TR',
                classes: contextClasses,
            },

            tabledata: {
                id: 'cell',
                tags: 'TD',
                classes: contextClasses,
            },
            
            tablehead_cell: {
                id: 'tablehead_cell_component',
                tags: 'TH',
                classes: contextClasses,
            },

        },
        
    },

}
