import heading from './typography_blocks/heading';
import paragraph from './typography_blocks/paragraph';
export {constants} from '../';

export default (editor, config={}) => {
    let typography_blocks = [
        heading(editor, config),
        paragraph(editor, config),
    ];
    
    return typography_blocks;
}

