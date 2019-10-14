import form from "./forms_components/form";
import form_group from "./forms_components/form_group";
import label from "./forms_components/label";
import input from "./forms_components/input";
import textarea from "./forms_components/textarea";

export default (config) => {
    
    const forms_components = [
        form(config),
        form_group(config),
        label(config),
        input(config),
        textarea(config),
    ];

    return forms_components;

}