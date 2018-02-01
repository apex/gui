import React, { Component } from 'react'
import Preview from './Preview'
import Editor from './Editor'
import './Example.css'

/**
 * Example is an component example .
 */

export default class extends Component {
  render() {
    const { name, desc, config } = this.props

    return <div class="Example">
      <div class="info">
        <span class="name">{name}</span>
        <p class="desc">{desc}</p>
      </div>

      <Editor
        id={name}
        value={JSON.stringify(config, null, 2)}
        onChange={e => this.onChnage(e)} />

      <Preview
        name={name}
        config={config} />
    </div>
  }
}
