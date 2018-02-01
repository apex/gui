
import ReactDOM from 'react-dom'
import Example from './Example'
import App from './App'

ReactDOM.render(<App>
  <Example
    name="FlatButton"
    desc="A simple flat button with configurable color."
    config={{ text: "SUBSCRIBE", color: '7956EF' }}
  />

  <Example
    name="ShadowButton"
    desc="A stylish shadowed button with configurable color."
    config={{ text: "SUBSCRIBE", color: '7956EF' }}
  />

  <Example
    name="Feature"
    desc="A feature block describing the functionality of a project."
    config={{ title: "TITLE", text: 'Some description here.' }}
  />
</App>, document.querySelector('#app'))
