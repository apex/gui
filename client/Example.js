import React, { Component } from 'react'
import debounce from 'lodash.debounce'
import Preview from './Preview'
import Input from './Input'
import './Example.css'
import { TwitterPicker } from 'react-color';

/**
 * Example is an component example.
 *
 * This component is stateful in order to re-render
 * the preview and update the copy/paste link.
 */

const DEFAULT_COLORS = ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8', '#7956EF'];

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props.config
    }

    this.onChangeDebounced = debounce(this.onChange, 400);
  }

  onChange(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    const { name, desc, count } = this.props
    const { text, color } = this.state

    return <div class="Example">
      <div class="info">
        <span class="name">{name}</span>
        <p class="desc">{desc}</p>
      </div>

      <div class="content">
        <Input
          label="Button text:"
          value={text}
          placeholder="(E.g: SUBSCRIBE)"
          onChange={value => this.onChangeDebounced('text', value)}
        />
        <TwitterPicker
          color={color}
          triangle="hide"
          colors={DEFAULT_COLORS}
          onChangeComplete={(color) => this.onChangeDebounced('color', color.hex.substr(1))}
        />
        <Preview
          name={name}
          config={this.state}
          count={count} />
      </div>
    </div>
  }
}
