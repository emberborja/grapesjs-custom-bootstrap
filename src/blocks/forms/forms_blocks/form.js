export default (editor, config) => {
    const blockId = config.constants.blocks.forms.form.id;
    const { form, form_group, form_label, form_control } = config.constants.components.forms;
    let form_block = {
        id: blockId,
        opts: {
            label: 'Form',
            category: 'Forms',
            attributes: { class: "fa fa-check-square-o" },
            content: `
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
              </div>
              <div class="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" id="exampleInputFile">
                <p class="help-block">Example block-level help text here.</p>
              </div>
              <div class="checkbox">
                <label>
                  <input type="checkbox"> Check me out
                </label>
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
            </form>`
            // {
            //     type: form.id,
            //     components: {
            //             type: form_group.id,
            //             components: [
            //                 {
            //                     type: form_label.id,
            //                 }, {
            //                     type: form_control.input.id
            //                 }]
            //     }
            // }
        }
    }
    return form_block;
}