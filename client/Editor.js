import AceEditor from 'react-ace'
import brace from 'brace'
import 'brace/mode/json'
import 'brace/theme/github'
import './Editor.css'

/**
 * Editor is a code editor.
 */

export default function({ id, value, onChange }) {
  return <div class="Editor">
    <AceEditor
      name={id}
      mode="json"
      theme="github"
      value={value}
      height="200px"
      width="400px"
      showGutter={false}
      highlightActiveLine={false}
      onChange={onChange}
      editorProps={{ $blockScrolling: true }}
    />
  </div>
}
