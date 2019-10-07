import heading from './typography_blocks/heading';
import paragraph from './typography_blocks/paragraph';
import abbreviation from './typography_blocks/abbreviation';
import address from './typography_blocks/address';
import blockquote from './typography_blocks/blockquote';
import list from './typography_blocks/list';

export default (editor, config) => {
    let typography_blocks = [
        heading(editor, config),
        paragraph(editor, config),
        // abbreviation(editor, config),
        address(editor, config),
        blockquote(editor, config),
        list(editor, config),
    ];
    
    return typography_blocks;
}

