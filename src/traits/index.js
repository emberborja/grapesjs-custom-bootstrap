import selectClass from './selectClass/'
import selectHeadingTag from './selectHeadingTag/'

export default function (editor, config = {}) {
  selectClass(editor, config)
  selectHeadingTag(editor, config)
}