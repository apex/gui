
import ReactDOM from 'react-dom'
import App from './App'
import * as api from './api'

;(async function () {
    console.log(await api.render('FlatButton', { text: 'SUBSCRIBE' }))
    console.log(await api.render('ShadowButton', { text: 'SUBSCRIBE' }))
})()

ReactDOM.render(<App />, document.querySelector('#app'))
