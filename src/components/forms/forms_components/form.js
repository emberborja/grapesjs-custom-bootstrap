export default (config) => {
    const { form } = config.constants.components.forms;
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
                    traits:[
                        'id',
                        'title',
                        {
                        type: 'select',
                        label: 'Type',
                        name: 'class',
                        options: [
                            { id: ' ', name: 'Default' },
                            ...form.classes.map(formclass => ({ id: formclass, name: formclass }) )
                        ]
                    }]
                },
            },
        }
    }
    return form_component;
}