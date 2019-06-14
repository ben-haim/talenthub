import React from 'react'

export const DEFAULT_NODE = 'paragraph'
export const INITAL_VALUE = {
  "object": "value",
  "document": {
    "object": "document",
    "nodes": [
      {
        "object": "block",
        "type": "paragraph",
        "nodes": [
          {
            "object": "text",
            "text": ''
          }
        ]
      },
      {
        "object": "block",
        "type": "paragraph",
        "nodes": [
          {
            "object": "text",
            "text": ''
          }
        ]
      }
    ]
  }
}

export const RULES = [
  {
    serialize(obj, children) {
      if (obj.object === 'mark') {
        switch (obj.type) {
          case 'bold':
            return <strong>{children}</strong>
          case 'italic':
            return <em>{children}</em>
          case 'underlined':
            return <u>{children}</u>
          default:
        }
      }
      switch (obj.type) {
        case 'paragraph':
        return <p>{children}</p>
        case 'list-item':
          return <li>{children}</li>
        case 'bulleted-list':
          return <ul>{children}</ul>
        case 'numbered-list':
          return <ol>{children}</ol>
        default:
      }
    },
  },
]