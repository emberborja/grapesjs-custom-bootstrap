import basic_link from './basics_blocks/basic_link';

export default (editor, config) => {

    let basics_blocks = [
        basic_link(editor, config),
    ];
    
    return basics_blocks;
}