import Preview from './Preview'
import Editor from './Editor'
import './Example.css'

/**
 * Example is an component example .
 */

export default function({ name, desc, config }) {
  return <div class="Example">
    <div class="info">
      <span class="name">{name}</span>
      <p class="desc">{desc}</p>
    </div>
    <Editor id={name} value={JSON.stringify(config, null, 2)} />
    <Preview name={name} config={config} />
  </div>
}
