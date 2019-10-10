export default (editor, config) => {
    const blockId = config.constants.blocks.tables.table.id;
    const { table } = config.constants.components.tables;
    let table_block = {
        id: blockId,
        opts: {
            label: 'Table',
            category: 'Tables',
            attributes: { class: "fa fa-table" },
            content: {
                type: table.id,
                components: [
                    {
                        type: 'thead',
                        components: {
                            type: 'row',
                            components: [
                                { 
                                    type: 'cell',
                                    tagName: 'th',
                                    content: '#'
                                },
                                { 
                                    type: 'cell',
                                    tagName: 'th',
                                    components: 'First Name'
                                },
                                { 
                                    type: 'cell',
                                    tagName: 'th',
                                    components: 'Last Name'
                                },
                                { 
                                    type: 'cell',
                                    tagName: 'th',
                                    components: 'Username'
                                },
                            ],
                        }
                    }, {
                        type: 'tbody',
                        components: [
                            { 
                                type: 'row',
                                components: [
                                    {
                                        type: 'cell',
                                        components: '1',
                                    },
                                    {
                                        type: 'cell',
                                        components: 'Mark',
                                    },
                                    {
                                        type: 'cell',
                                        components: 'Otto',
                                    },
                                    {
                                        type: 'cell',
                                        components: '@mdo',
                                    },
                                ]
                            },
                            { 
                                type: 'row',
                                components: [
                                    {
                                        type: 'cell',
                                        components: '2',
                                    },
                                    {
                                        type: 'cell',
                                        components: 'Jacob',
                                    },
                                    {
                                        type: 'cell',
                                        components: 'Thornton',
                                    },
                                    {
                                        type: 'cell',
                                        components: '@fat',
                                    },
                                ]
                            },
                            { 
                                type: 'row',
                                components: [
                                    {
                                        type: 'cell',
                                        components: '3',
                                    },
                                    {
                                        type: 'cell',
                                        components: 'Larry',
                                    },
                                    {
                                        type: 'cell',
                                        components: 'the Bird',
                                    },
                                    {
                                        type: 'cell',
                                        components: '@twitter',
                                    },
                                ]
                            },
                        ],
                    },
                ]
            }
        }
    }
    return table_block;
}