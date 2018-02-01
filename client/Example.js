import React, { Component } from 'react'
import Preview from './Preview'
import Editor from './Editor'
import './Example.css'

/**
 * Example is an component example .
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
    const { name, desc } = this.props
    const { config } = this.state

    return <div class="Example">
      <div class="info">
        <span class="name">{name}</span>
        <p class="desc">{desc}</p>
      </div>

      <Editor
        id={name}
        value={JSON.stringify(config, null, 2)}
        onChange={e => this.onChange(e)} />

      <Preview
        name={name}
        config={config} />
    </div>
  }
}
