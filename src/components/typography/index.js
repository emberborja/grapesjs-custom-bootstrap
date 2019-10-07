import heading from './typography_components/heading';
import paragraph from './typography_components/paragraph';
import abbreviation from './typography_components/abbreviation';

export default (config) => {
    
    const typography_components = [
        heading(config),
        paragraph(config),
        abbreviation(config),
    ];

    return typography_components;

}