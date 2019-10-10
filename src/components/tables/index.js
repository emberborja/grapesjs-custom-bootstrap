import table from "./tables_components/table";
import tabledata from "./tables_components/tabledata";
import tablehead_cell from "./tables_components/tablehead_cell";
import table_responsive from "./tables_components/table_responsive";

export default (config) => {
    
    const tables_components = [
        table(config),
        table_responsive(config),
        tabledata(config),
        tablehead_cell(config),
    ];

    return tables_components;

}