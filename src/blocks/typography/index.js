import heading from './typography_blocks/heading';
import paragraph from './typography_blocks/paragraph';
import abbreviation from './typography_blocks/abbreviation';

export default (editor, config) => {
    let typography_blocks = [
        heading(editor, config),
        paragraph(editor, config),
        abbreviation(editor, config),
    ];
    
    return typography_blocks;
}

