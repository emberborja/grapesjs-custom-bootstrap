import headings from './typography_blocks/headings';
export {constants} from '../';

export default (editor, config={}) => {
    let typography_blocks = [
        headings(editor, config),
    ];
    
    return typography_blocks;
}

