export default (editor) => {
    const modal = editor.Modal;
    const modalTitle = 'Welcome!';
	const container = `
		<div>
			<ul>
				<li>Double-click to edit a component.</li>
            	<li>Changes save automatically.</li>
				<li>You cannot nest "conainter" blocks.</li>
				<li>Containers have a fixed width. If you want a full-width container, use "container-fluid".</li>
				<li>Use "row" blocks to house collectoin of "columns".</li>
				<li>Put your content within "columns" to fully utilize the responsive nature of Bootstrap.</li>
				<li>Use the traits panel to adjust the width of your columns. Width is abstracted as 1 through 12.</li>
				<li>Use xs, sm, md, and lg to set breakpoints for responsive column widths at certain screen sizes.</li>
				<li>When using the Style Manager panel, keep in mind that changes will happen to all components who share a specific class with the component you are editing.</li>
				<li>To keep changes contained to the component you are editing, give it a unique class name at the top of the Style Manager panel.</li>
			</ul>
		</div>`;
    
	return {
		run(editor) {
			modal.setTitle(modalTitle);
			modal.setContent(container);
			modal.open().getModel()
			.once('change:open', () => editor.stopCommand(this.id));
		},
	
		stop() {
			modal.close();
		}
	};
}