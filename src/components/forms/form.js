export default (config) => {
    const { form } = config.constants.components.forms.form;
    let form_component = {
        type: form.id,
        methods: {
            isComponent: (el) => {
                if (el && form.tags.includes(el.tagName) ) {
                    return { type: form.id }
                }
            },
            model: {
                defaults: {
                    name: 'Form',
                    draggable: '[class|=col]',
                    droppable: true,
                    traits:[{
                        type: 'select',
                        label: 'Type',
                        name: 'class',
                        options: [
                            ...form.classes.map(formclass => ({ id: formclass, name: formclass }) )
                        ]
                    }]
                },
            },
        }
    }
    return form_component;
}