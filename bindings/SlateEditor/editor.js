import React, { useCallback, useMemo, useState } from 'react'
import isHotkey from 'is-hotkey'
import { Editable, withReact, useSlate, Slate } from 'slate-react'
import { Editor, Transforms, createEditor, Span, Node, Text } from 'slate'
import { withHistory } from 'slate-history'
import { BoldOutlined, ItalicOutlined, UnderlineOutlined } from '@ant-design/icons'
import { FormatQuote, FormatBold, FormatItalic, FormatUnderlined, LooksOne, LooksTwo, FormatListNumbered, FormatListBulleted, FormatAlignLeft } from '@material-ui/icons'
import escapeHtml from 'escape-html'
import { jsx } from 'slate-hyperscript'

import { Button, Icon, Toolbar } from './components'

const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
}

const LIST_TYPES = ['numbered-list', 'bulleted-list']

const serialize = node => {
  if (Text.isText(node)) {
    if (node.bold && node.italic) {
      return `<strong><em>${node.text}</em></strong>`
    } else if (node.bold) {
      return `<strong>${node.text}</strong>`
    } else if (node.italic) {
      return `<em>${node.text}</em>`
    } else {
      return node.text
    }
  }

  const children = node.children.map(n => serialize(n)).join('')

  const style = node.alignment ? `style="text-align: ${node.alignment}"` : ""

  switch (node.type) {
    case 'heading-one':
      return `<h1 ${style}>${children}</h1>`
    case 'heading-two':
      return `<h2 ${style}>${children}</h2>`
    case 'quote':
      return `<blockquote ${style}><p>${children}</p></blockquote>`
    case 'paragraph':
      return `<p ${style}>${children}</p>`
    case 'link':
      return `<a ${style} href="${escapeHtml(node.url)}">${children}</a>`
    default:
      return children
  }
}

const deserialize = el => {
  if (el.nodeType === 3) {
    return el.textContent
  } else if (el.nodeType !== 1) {
    return null
  }

  const children = Array.from(el.childNodes).map(deserialize)
  switch (el.nodeName) {
    case 'BODY':
      return jsx('fragment', {}, children)
    case 'BR':
      return '\n'
    case 'BLOCKQUOTE':
      return jsx('element', { type: 'quote' }, children)
    case 'P':
      return jsx('element', { type: 'paragraph' }, children)
    case 'A':
      return jsx('element', { type: 'link', url: el.getAttribute('href') }, children)
    default:
      return el.textContent
  }
}

const blankValue = [
  {
    type: 'paragraph',
    children: [
      { text: '' },
    ],
  },
]

const SlateEditor = ({ readOnly = false, defaultValue, onChange }) => {
  const document = new DOMParser().parseFromString(defaultValue, 'text/html')
  const [value, setValue] = useState(
    defaultValue?.length > 0
      ? deserialize(document.body)
      : blankValue)
  const renderElement = useCallback(props => <Element {...props} />, [])
  const renderLeaf = useCallback(props => <Leaf {...props} />, [])
  const editor = useMemo(() => withHistory(withReact(createEditor())), [])

  return (
    <div
      className="border border-solid border-gray-400"
    >
      <Slate
        editor={editor}
        value={value}
        onChange={value => {
          let htmlString = value.map(n => serialize(n)).join('')
          onChange(htmlString)
          setValue(value)
        }}
      >
        {!readOnly && <Toolbar>
          <MarkButton format="bold" icon={<FormatBold />} />
          <MarkButton format="italic" icon={<FormatItalic />} />
          <MarkButton format="underline" icon={<FormatUnderlined />} />
          <MarkButton format="code" icon="code" />
          <BlockButton format="heading-one" icon={<LooksOne />} />
          <BlockButton format="heading-two" icon={<LooksTwo />} />
          <BlockButton format="block-quote" icon={<FormatQuote />} />
          <BlockButton format="numbered-list" icon={<FormatListNumbered />} />
          <BlockButton format="bulleted-list" icon={<FormatListBulleted />} />
          <AlignButton format="center" icon={<FormatAlignLeft />} />
        </Toolbar>}
        <Editable
          className="border border-solid p-2 hover:border-blue-400 focus:border-blue-600 transition-colors"
          renderElement={renderElement}
          renderLeaf={renderLeaf}
          placeholder="Enter content..."
          spellCheck
          autoFocus
          readOnly={readOnly}
          onKeyDown={event => {
            for (const hotkey in HOTKEYS) {
              if (isHotkey(hotkey, event)) {
                event.preventDefault()
                const mark = HOTKEYS[hotkey]
                toggleMark(editor, mark)
              }
            }
          }}
        />
      </Slate>
    </div>

  )
}

const toggleBlock = (editor, format) => {
  const isActive = isBlockActive(editor, format)
  const isList = LIST_TYPES.includes(format)

  Transforms.unwrapNodes(editor, {
    match: n => LIST_TYPES.includes(n.type),
    split: true,
  })

  Transforms.setNodes(editor, {
    type: isActive ? 'paragraph' : isList ? 'list-item' : format,
  })

  if (!isActive && isList) {
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}

const toggleMark = (editor, format) => {
  const isActive = isMarkActive(editor, format)

  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}

const toggleAlign = (editor, format) => {
  const isActive = isAlignmentActive(editor, format)

  Transforms.setNodes(editor, {
    ...(!isActive ? {
      alignment: format
    } : {})
  })
}

const isBlockActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n.type === format,
  })

  return !!match
}

const isMarkActive = (editor, format) => {
  const marks = Editor.marks(editor)
  return marks ? marks[format] === true : false
}

const isAlignmentActive = (editor, format) => {
  const [match] = Editor.nodes(editor, {
    match: n => n?.alignment === format
  })

  return !!match
}


const Element = ({ attributes, children, element }) => {
  const style = element.alignment ? { textAlign: element.alignment } : {}

  switch (element.type) {
    case 'block-quote':
      return <blockquote {...attributes} style={style}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes} style={style}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes} style={style}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes} style={style}>{children}</h2>
    case 'list-item':
      return <li {...attributes} style={style}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes} style={style}>{children}</ol>
    default:
      return <p {...attributes} style={style}>{children}</p>
  }
}

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }

  if (leaf.code) {
    children = <code>{children}</code>
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }

  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

const BlockButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isBlockActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleBlock(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

const MarkButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      active={isMarkActive(editor, format)}
      onMouseDown={event => {
        event.preventDefault()
        toggleMark(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

const AlignButton = ({ format, icon }) => {
  const editor = useSlate()
  return (
    <Button
      onMouseDown={event => {
        event.preventDefault()
        toggleAlign(editor, format)
      }}
    >
      {icon}
    </Button>
  )
}

export default SlateEditor
