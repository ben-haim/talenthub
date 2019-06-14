import { Editor } from 'slate-react'
import { Value } from 'slate'

import React from 'react'

import {DEFAULT_NODE, INITAL_VALUE} from './text_editor_config'
import '../../styles/rich_text.scss'

class TextEditor extends React.Component {
  state = {
    value: Value.fromJSON(INITAL_VALUE),
  }

  hasMark = type => {
    const { value } = this.state
    return value.activeMarks.some(mark => mark.type === type)
  }

  hasBlock = type => {
    const { value } = this.state
    return value.blocks.some(node => node.type === type)
  }

  ref = editor => {
    this.editor = editor
  }

  render() {
    return (
      <div className="input-group">
        <label>{this.props.label}</label>
        <div className="rich-text">
            <div className="toolbar">
              {this.renderMarkButton('bold', 'format_bold')}
              {this.renderMarkButton('italic', 'format_italic')}
              {this.renderMarkButton('underlined', 'format_underlined')}
              {this.renderBlockButton('numbered-list', 'format_list_numbered')}
              {this.renderBlockButton('bulleted-list', 'format_list_bulleted')}
            </div>
            <Editor
              spellCheck
              autoFocus
              placeholder={this.props.placeholder}
              ref={this.ref}
              value={this.state.value}
              onChange={this.onChange}
              renderBlock={this.renderBlock}
              renderMark={this.renderMark}
            />
        </div>
      </div>
    )
  }

  renderMarkButton = (type, icon) => {
    const isActive = this.hasMark(type)

    return (
      <span
        className={isActive ? "editor-button active" : "editor-button"}
        onMouseDown={event => this.onClickMark(event, type)}
      >
        <span className="material-icons">{icon}</span>
      </span>
    )
  }

  renderBlockButton = (type, icon) => {
    let isActive = this.hasBlock(type)

    const { value: { document, blocks } } = this.state

    if (blocks.size > 0) {
      const parent = document.getParent(blocks.first().key)
      isActive = this.hasBlock('list-item') && parent && parent.type === type
    }

    return (
      <span
        className={isActive ? "editor-button active" : "editor-button"}
        onMouseDown={event => this.onClickBlock(event, type)}
      >
        <span className="material-icons">{icon}</span>
      </span>
    )
  }

  renderBlock = (props, editor, next) => {
    const { attributes, children, node } = props

    switch (node.type) {
      case 'bulleted-list':
        return <ul {...attributes}>{children}</ul>
      case 'list-item':
        return <li {...attributes}>{children}</li>
      case 'numbered-list':
        return <ol {...attributes}>{children}</ol>
      default:
        return next()
    }
  }

  renderMark = (props, editor, next) => {
    const { children, mark, attributes } = props

    switch (mark.type) {
      case 'bold':
        return <strong {...attributes}>{children}</strong>
      case 'code':
        return <code {...attributes}>{children}</code>
      case 'italic':
        return <em {...attributes}>{children}</em>
      case 'underlined':
        return <u {...attributes}>{children}</u>
      default:
        return next()
    }
  }

  onChange = ({ value }) => {
    this.setState({ value })
    this.props.onChange(JSON.stringify(value.toJSON()));
  }

  onClickMark = (event, type) => {
    event.preventDefault()
    this.editor.toggleMark(type)
  }

  onClickBlock = (event, type) => {
    event.preventDefault()

    const { editor } = this
    const { value } = editor
    const { document } = value

    if (type !== 'bulleted-list' && type !== 'numbered-list') {
      const isActive = this.hasBlock(type)
      const isList = this.hasBlock('list-item')

      if (isList) {
        editor
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else {
        editor.setBlocks(isActive ? DEFAULT_NODE : type)
      }
    } else {
      const isList = this.hasBlock('list-item')
      const isType = value.blocks.some(block => {
        return !!document.getClosest(block.key, parent => parent.type === type)
      })

      if (isList && isType) {
        editor
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock('bulleted-list')
          .unwrapBlock('numbered-list')
      } else if (isList) {
        editor
          .unwrapBlock(
            type === 'bulleted-list' ? 'numbered-list' : 'bulleted-list'
          )
          .wrapBlock(type)
      } else {
        editor.setBlocks('list-item').wrapBlock(type)
      }
    }
  }
}

export default TextEditor