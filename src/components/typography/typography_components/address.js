export default (config) => {
    const addressComponent = config.constants.components.typography.address;
    let address = {
        type: addressComponent.id,
        methods: {
            isComponent: (el) => {
                if (el && el.tagName && (el.tagName === addressComponent.tags )) {
                    return { type: addressComponent.id }
                }
            },
            extend: 'text',
            model: {
                defaults: {
                    tagName: addressComponent.tags,
                    name: 'Address',
                    draggable: '[class|="col"]',
                    components: `<b>Twitter, Inc.</b><br>
                        1355 Market Street, Suite 900<br>
                        San Francisco, CA 94103<br>
                        <abbr title="Phone">P:</abbr> (123) 456-7890`,
                },
            },
            extendView: 'text',
            view: {},
        }
    }
    return address;
}