
/**
 * API endpoint.
 */

const api = process.env.NODE_ENV == 'production'
  ? 'https://gui.apex.sh'
  : 'http://localhost:3000'

/**
 * URL returns the preview url.
 */

export function url({ name, config }) {
  const c = encodeURIComponent(JSON.stringify(config))
  return `${api}/component?name=${name}&config=${c}`
}
