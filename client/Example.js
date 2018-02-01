import Preview from './Preview'
import './Example.css'

/**
 * Example is an component example .
 */

export default function({ name, desc, config }) {
  return <div class="Example">
    <span class="name">{name}</span>
    <p class="desc">{desc}</p>
    <Preview name={name} config={config} />
  </div>
}
