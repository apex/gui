import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import Preview from './Preview'
import Editor from './Editor'
import './Example.css'

/**
 * Example is an component example.
 *
 * This component is stateful in order to re-render
 * the preview and update the copy/paste link.
 */

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      config: props.config
    }

    this.onChangeDebounced = debounce(this.onChange, 400)
  }

  onChange(config) {
    this.setState({
      config: JSON.parse(config)
    })
  }

  render() {
    const { name, desc, count } = this.props
    const { config } = this.state

    return <div class="Example">
      <div class="info">
        <span class="name">{name}</span>
        <p class="desc">{desc}</p>
      </div>

      <div class="content">
        <Editor
          id={name}
          value={JSON.stringify(config, null, 2)}
          onChange={e => this.onChangeDebounced(e)} />

        <Preview
          name={name}
          config={config}
          count={count} />
      </div>
    </div>
  }
}
