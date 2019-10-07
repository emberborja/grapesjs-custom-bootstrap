import heading from './typography_components/heading';
import paragraph from './typography_components/paragraph';
import abbreviation from './typography_components/abbreviation';
import address from './typography_components/address';
import blockquote from './typography_components/bockquote';
import list from './typography_components/list';

export default (config) => {
    
    const typography_components = [
        heading(config),
        paragraph(config),
        abbreviation(config),
        address(config),
        blockquote(config),
        list(config),
    ];

    return typography_components;

}