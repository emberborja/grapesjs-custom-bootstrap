import openImport from './functions/openImport';
import aboutModal from './functions/aboutModal';

export default (editor, config = {}) => {
    const panelManager = editor.Panels;
    const addButtonToPanels = btn => panelManager.addButton('options', btn);
    const panelButtons = [
        {id: 'undo', className: 'fa fa-undo', command: e => e.runCommand('core:undo'), attributes: { title: 'Undo'}, active: false,},
        {id: 'redo', className: 'fa fa-repeat', command: e => e.runCommand('core:redo'), attributes: { title: 'Redo'}, active: false,},
        {id: 'gjs-open-import-webpage', className: 'fa fa-download', command: 'gjs-open-import-webpage', attributes: { title: 'Import'}, active: false,},
        {id: 'canvas-clear', className: 'fa fa-trash', command: 'canvas-clear', attributes: { title: 'Clear Canvas'}, active: false,},
        {id: 'About', className: 'fa fa-question-circle', command: 'about-modal', attributes: { title: 'About'}, active: false,},
    ];
    panelButtons.forEach(addButtonToPanels);
	
	const commands = editor.Commands;
	commands.add('gjs-open-import-webpage', openImport(editor));
	commands.add('canvas-clear', e => confirm('Are you sure you want to clear the canvas?') && e.runCommand('core:canvas-clear'));
	commands.add('about-modal', aboutModal(editor));
}
