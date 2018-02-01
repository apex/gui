
import './Preview.css'
import range from 'lodash.range'
import { url } from './api'

/**
 * Preview is a component preview loader.
 */

export default function({ name, config, count = 1 }) {
  return <div class="Preview">
    {range(count).map((v, i) => {
      return <img key={i} src={url({ name, config })} />
    })}
  </div>
}
