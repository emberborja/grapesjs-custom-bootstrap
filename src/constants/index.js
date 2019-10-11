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
            tablehead: { id: 'tablehead_block' },
            tablefoot: { id: 'tablefoot_block' },
            tablerow: { id: 'tablerow_block' },
            tabledata: { id: 'tabledata_block' },
        },

        forms: {
            form: { id: 'form_block' },
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
                id: 'thead',
                tags: ['THEAD', 'thead'],
            },

            tablefoot: {
                id: 'tfoot',
                tags: ['TFOOT','tfoot'],
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

        },
        
        forms: {

            form: {
                id: 'form_component',
                tags: ['FORM', 'form'],
                classes: ['form-inline', 'form-horizontal']
            },

            form_group: {
                id: 'form_group_component',
                tags: ['DIV', 'div'],
                classes: ['form-group', 'form-group form-group-lg', 'form-group form-group-sm'],
                validation_state_classes: ['has-success', 'has-warning', 'has-error'],
                // on <input class="form-control"> that are "textual", can give .has-feedback to div.form-group
                // will color an icon and position it correctly
                feedback: {
                    tags: ['div', 'span'],
                    classes: ['has-feedback', 'form-control-feedback']
                },
                // add these sizing classes after using .form-group, like with buttons
                form_horizontal_sizing_classes: ['form-group-lg', 'form-group-sm']
            },

            form_label: {
                id: 'form_label_component', 
                tags: ['LABEL', 'label'],
                // make col classes to use as reference here, spread the array
                classes: ['col-*-*', 'control-label'],
                // static form control is text next to a label, no interactivity; Styled by bootstrap
                // wrap the <p> in a div and give it col class, give <p> class form-control-static
                static_form_control: {
                    tags: ['div', 'p'],
                    classes: ['col-*-*', 'form-control-static']
                }, 
            },

            // if needed, can use form-controls within div.row > div.col-*-* > {form control element}
            form_control: {
                classes: ['form-control', 'input-lg', 'input-sm'],
                attributes: ['disabled', 'readonly'],
                input: {
                    id: 'form_control_input',
                    tags: ['INPUT', 'input'],
                    // ...classes
                    attributes: {
                        placeholder: 'placeholder text',
                        types: ['text', 'password', 'datetime', 'datetime-local', 'date', 'month', 'time', 'week', 'number', 'email', 'url', 'search', 'tel', 'color'],
                    },
                },
                textarea: {
                    id: 'form_control_textarea',
                    tags: ['TEXTAREA', 'textarea'],
                    // ...classes
                    attributes: { 
                        placeholder: 'placeholder text',
                        rows: 2,
                    },
                },
                select: {
                    id: 'form_control_select',
                    tags: ['SELECT', 'select'],
                    // ...classes
                    attributes: {
                        multiple: false,
                    },
                },
                
            },

            form_radio_checkbox: {
                id: 'form_radio_checkbox_component',
                tags: ['DIV', 'LABEL', 'INPUT', 'div', 'label', 'input'],
                classes: ['checkbox', 'radio', 'disabled'],
                attributes: ['value', 'name', 'disabled', 'type'],
                types: ['checkbox', 'radio'],
                label_classes: ['checkbox-inline', 'radio-inline'],
                // bootstrap example has div, label, input nested in label followed by text
                // checkboxes value is optional
                // radio buttons to work correctly should all share the same name attribute, then have a unique id and value
                // to give validation state to these, wrap the <div class="checkbox"> with <div class="has-warning/(etc...)">
            },

            form_help_block: {
                id: 'form_help_block_component',
                tags: ['SPAN', 'span'],
                classes: ['help-block'],
                // match help block id to aria-describedby="{id}" on the form control it is describing, for screen readers
            }, 

            // input groups (will be nested within form-groups)

        }

    },

}
