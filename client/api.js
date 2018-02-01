
import axios from 'axios'

/**
 * API client.
 */

const api = axios.create({
  url: 'http://localhost:3000'
})

/**
 * Render returns a rendered component SVG.
 */

export async function render(name, config = {}) {
  const res = await api.get('/component', {
    params: {
      name,
      config: JSON.stringify(config)
    }
  })

  return res.data
}
