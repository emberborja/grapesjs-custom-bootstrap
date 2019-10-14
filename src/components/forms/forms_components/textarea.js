export default (config) => {
    const { form_control } = config.constants.components.forms;
    let form_control_textarea = {
        type: form_control.textarea.id,
        methods: {
            isComponent: (el) => {
                if (el && form_control.textarea.tags.includes(el.tagName)) {
                    return { type: form_control.textarea.id }
                }
            },
            model: {
                defaults: {
                    name: 'Form-Textarea',
                    draggable: '.form-group',
                    droppable: false,
                    attributes: {
                        palceholder: 'placeholder text',
                    },
                    classes: 'form-control',
                    traits:[
                        'id',
                        'title',
                        {
                            type: 'text',
                            label: 'Placeholder text',
                            name: 'placeholder',
                            // changeProp: 1,
                            // placeholder: '',
                        },
                        {
                            type: 'select',
                            label: 'Size',
                            name: 'class',
                            options: [
                                { id: 'form-control', name: 'Regular' },
                                { id: 'form-control input-lg', name: 'Large' },
                                { id: 'form-control input-sm', name: 'Small' },
                            ]
                        },
                       // add number input for rows?   
                    ]
                },
            },
        }
    }
    return form_control_textarea;
}