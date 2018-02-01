import './App.css'
import Example from './Example'

/**
 * App is the base application.
 */

export default function() {
  return <div class="App">
    <Example name="FlatButton" desc="A simple flat button with configurable color." />
    <Example name="ShadowButton" desc="A stylish shadowed button with configurable color." />
  </div>
}
