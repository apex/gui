
import './Preview.css'
import range from 'lodash.range'
import { url } from './api'

/**
 * Preview is a component preview loader.
 */

export default function ({ name, config }) {
  return <div class="Preview">
    <img key={JSON.stringify(config)} src={url({ name, config })} />
  </div>
}
