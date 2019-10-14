import form from "./forms_blocks/form";

export default (editor, config) => {

    let forms_blocks = [
        form(editor, config),
    ];
    
    return forms_blocks;
}