export default (config) => {
    const { form_group } = config.constants.components.forms;
    let form_group_component = {
        type: form_group.id,
        methods: {
            isComponent: (el) => {
                if (el && (form_group.tags.includes(el.tagName) && el.classList.contains('form-group'))) {
                    return { type: form_group.id }
                }
            },
            model: {
                defaults: {
                    name: 'Form-group',
                    draggable: 'FORM',
                    droppable: true,
                    traits:[
                        'id',
                        {
                            type: 'select',
                            label: 'Size',
                            name: 'class',
                            options: [
                                { id: 'form-group', name: 'Regular' },
                                { id: 'form-group form-group-lg', name: 'Large' },
                                { id: 'form-group form-group-sm', name: 'Small' },
                            ]
                        },
                        {
                            type: 'select',
                            label: 'Validation State',
                            name: 'class',
                            options: [
                                ...form_group.validation_state_classes.map(x => ({id:x,name:x}))
                            ]
                        },
                        
                    ]
                },

                updated(property, value, prevValue) {
                    if(property != 'classes') return;
                    console.log('property', property);
                    console.log('value', value.models);
                    console.log('prev value', prevValue);
                    console.log(this.getClasses());
                }

            },
        }
    }
    return form_group_component;
}