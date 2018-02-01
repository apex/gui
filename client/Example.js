import './Example.css'

/**
 * Example is an component example .
 */

export default function({ name, desc, preview }) {
  return <div class="Example">
    <span class="name">{name}</span>
    <p class="desc">{desc}</p>
    <div class="preview">
      {preview}
    </div>
  </div>
}
