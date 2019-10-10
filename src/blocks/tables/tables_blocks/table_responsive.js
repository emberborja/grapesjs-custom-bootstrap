export default (editor, config) => {
    const blockId = config.constants.blocks.tables.table_responsive.id;
    const { table } = config.constants.components.tables;
    let table_responsive_block = {
        id: blockId,
        opts: {
            label: 'Responsive Table',
            category: 'Tables',
            attributes: { class: "fa fa-table" },
            content: {
                type: table.wrapper.id,
                components: `
                    <table class="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>`
            },
                
        }
    }
    return table_responsive_block;
}