import table from "./tables_blocks/table";
import table_responsive from "./tables_blocks/table_responsive";
import tabledata from "./tables_blocks/tabledata";
import tablehead_cell from "./tables_blocks/tablehead_cell";
import tablerow from "./tables_blocks/tablerow";

export default (editor, config) => {
    let tables_blocks = [
        table(editor, config),
        table_responsive(editor, config),
        tablerow(editor, config),
        tabledata(editor, config),
        tablehead_cell(editor, config),
    ];
    
    return tables_blocks;
}
