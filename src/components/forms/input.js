export default (config) => {
    const { form_control } = config.constants.components.forms;
    let form_control_input = {
        type: form_control.input.id,
        methods: {
            isComponent: (el) => {
                if (el && form_control.input.tags.includes(el.tagName)) {
                    return { type: form_control.input.id }
                }
            },
            model: {
                defaults: {
                    name: 'Form-Input',
                    draggable: '[class|=col], .form-group',
                    droppable: false,
                    attributes: {
                        palceholder: 'placeholder text',
                        type: 'text',
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
                        {
                            type: 'select',
                            label: 'Input Type',
                            name: 'type',
                            options: [
                                ...form_control.input.attributes.types.map(type => ({ id: type, name: type }))
                            ]
                        },
                       
                    ]
                },
            },
        }
    }
    return form_control_input;
}