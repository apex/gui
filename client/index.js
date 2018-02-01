
import ReactDOM from 'react-dom'
import Example from './Example'
import App from './App'

ReactDOM.render(<App>
  <Example name="FlatButton" desc="A simple flat button with configurable color." />
  <Example name="ShadowButton" desc="A stylish shadowed button with configurable color." />
</App>, document.querySelector('#app'))
