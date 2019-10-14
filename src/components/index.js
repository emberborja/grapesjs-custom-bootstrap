import grid_system_components from './grid_system/';
import typography_components from './typography/';
import tables_components from './tables/';
import forms_components from './forms/';

export default (editor, config) => {
    const domc = editor.DomComponents;
    const defaultType = domc.getType('default');
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    
    const componentList = [
        ...grid_system_components(config),
        ...typography_components(config),
        ...tables_components(config),
        ...forms_components(config),
    ];
    
    componentList.forEach(component => domc.addType(component.type, component.methods));
    
  }
  