import column from './grid_system_components/column';
import container from './grid_system_components/container';
import row from './grid_system_components/row';

export default (config) => {
    
    const grid_system_components = [
        column(config), 
        container(config), 
        row(config),
    ];

    return grid_system_components;

}