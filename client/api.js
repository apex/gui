
/**
 * API endpoint.
 */

const api = 'http://localhost:3000'

/**
 * URL returns the preview url.
 */

export function url({ name, config }) {
  return `http://${api}/component?name=${name}&config=${JSON.stringify(config)}`
}
