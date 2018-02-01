
import './Preview.css'
import { url } from './api'

/**
 * Preview is a component preview loader.
 */

export default function({ name, config }) {
  return <div class="Preview">
    <img src={url({ name, config })} />
  </div>
}
