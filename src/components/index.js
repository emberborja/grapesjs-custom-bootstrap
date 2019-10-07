import column from './grid_system/column';
import container from './grid_system/container';
import row from './grid_system/row';
import heading from './typography/heading';
import paragraph from './typography/paragraph';

export default (editor, config) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    console.log('components index', config);    
    const componentList = [
        column(config), 
        container(config), 
        row(config),
        heading(config),
        paragraph(config),
    ];
    
    componentList.forEach(component => domc.addType(component.type, component.methods));
  }
  