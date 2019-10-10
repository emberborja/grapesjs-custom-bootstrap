import table from "./tables_components/table";
import tabledata from "./tables_components/tabledata";
import table_responsive from "./tables_components/table_responsive";
import tablerow from "./tables_components/tablerow";
import tablehead from "./tables_components/tablehead";
import tablefoot from "./tables_components/tablefoot";

export default (config) => {
    
    const tables_components = [
        table(config),
        table_responsive(config),
        tablehead(config),
        tablefoot(config),
        tablerow(config),
        tabledata(config),
    ];

    return tables_components;

}