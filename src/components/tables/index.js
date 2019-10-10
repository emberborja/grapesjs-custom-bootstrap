import table from "./tables_components/table";
import tabledata from "./tables_components/tabledata";
import tablehead_cell from "./tables_components/tablehead_cell";
import table_responsive from "./tables_components/table_responsive";
import tablerow from "./tables_components/tablerow";

export default (config) => {
    
    const tables_components = [
        table(config),
        table_responsive(config),
        tablerow(config),
        tablehead_cell(config),
        tabledata(config),
    ];

    return tables_components;

}