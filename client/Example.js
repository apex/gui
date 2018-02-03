import React, { Component } from 'react'
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


      <Preview
        name={name}
        config={config}
        count={count} />

      <Editor
        id={name}
        value={JSON.stringify(config, null, 2)}
        onChange={e => this.onChange(e)} />
    </div>
  }
}
