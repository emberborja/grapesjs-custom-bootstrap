import table from "./tables_blocks/table";
import table_responsive from "./tables_blocks/table_responsive";
import tabledata from "./tables_blocks/tabledata";
import tablerow from "./tables_blocks/tablerow";
import tablehead from "./tables_blocks/tablehead";

export default (editor, config) => {
    let tables_blocks = [
        table(editor, config),
        table_responsive(editor, config),
        tablehead(editor,config),
        tablerow(editor, config),
        tabledata(editor, config),
    ];
    
    return tables_blocks;
}
