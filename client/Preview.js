
import './Preview.css'

/**
 * Preview is a component preview loader.
 */

export default function({ name, config }) {
  return <div class="Preview">
    <img src={url({ name, config })} />
  </div>
}

/**
 * URL returns the preview url.
 */

function url({ name, config }) {
  return `http://localhost:3000/component?name=${name}&config=${JSON.stringify(config)}`
}
