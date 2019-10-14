export default (config) => {
    const { form_label } = config.constants.components.forms;
    let form_label_component = {
        type: form_label.id,
        methods: {
            isComponent: (el) => {
                if (el && form_label.tags.includes(el.tagName)) {
                    return { type: form_label.id }
                }
            },
            model: {
                defaults: {
                    tagName: 'label',
                    name: 'Form-label',
                    draggable: '.form-group',
                    droppable: false,
                    attributes: {
                        for: 'defaultInput',
                    },
                    editable: true,
                    classes: ['control-label'],
                    traits:[
                        'id',
                        'title',
                        {
                            type: 'text',
                            label: 'For input id',
                            name: 'for',
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
                       // add select trait for col classes, to size labels
                    ]
                },
            },
        }
    }
    return form_label_component;
}