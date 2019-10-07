import grid_system_components from './grid_system/';
import typography_components from './typography/';

export default (editor, config) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    
    const componentList = [
        ...grid_system_components(config),
        ...typography_components(config),
    ];
    
    componentList.forEach(component => domc.addType(component.type, component.methods));
    
  }
  