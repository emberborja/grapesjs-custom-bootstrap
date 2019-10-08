import table from "./tables_components/table";

export default (config) => {
    
    const tables_components = [
        table(config),
    ];

    return tables_components;

}