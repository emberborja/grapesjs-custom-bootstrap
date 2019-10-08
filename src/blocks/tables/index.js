import table from "./tables_blocks/table";
import table_responsive from "./tables_blocks/table_responsive";

export default (editor, config) => {
    let tables_blocks = [
        table(editor, config),
        table_responsive(editor, config),
    ];
    
    return tables_blocks;
}
