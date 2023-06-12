import React from 'react'
import ListItem from '@tiptap/extension-list-item'
import { Editor, EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

type Props = {
    editor: Editor | null;
}

const MenuBar = ({ editor }: Props) => {
    if (!editor) {
      return null
    }
  
    return (
      <div className='flex items-center justify-center'>
        <div className='items-center gap-5'>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleBold()
              .run()
          }
          className={editor.isActive('bold') ? 'bg-slate-600 text-slate-300 p-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          <b>B</b>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleItalic()
              .run()
          }
          className={editor.isActive('italic') ? 'bg-slate-600 text-slate-300 p-1 px-2 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 px-2 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          <i>I</i>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleStrike()
              .run()
          }
          className={editor.isActive('strike') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
         <strike>strike</strike>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .toggleCode()
              .run()
          }
          className={editor.isActive('code') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          code
        </button>
        <button
        type='button' onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={editor.isActive('blockquote') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}>
          clear marks
        </button>
        <button
        type='button' onClick={() => editor.chain().focus().clearNodes().run()}
        className={editor.isActive('blockquote') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}>
          clear nodes
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          ¶aragraph
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          H<span className="text-xs">1</span>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          H<span className="text-xs">2</span>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          H<span className="text-xs">3</span>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          H<span className="text-xs">4</span>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          H<span className="text-xs">5</span>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          className={editor.isActive('heading', { level: 6 }) ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          H<span className="text-xs">6</span>
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={editor.isActive('bulletList') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          bullet list
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={editor.isActive('orderedList') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          ordered list
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          code block
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
        >
          blockquote
        </button>
        <button
        type='button' onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={editor.isActive('blockquote') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}>
          horizontal rule
        </button>
        <button
        type='button' onClick={() => editor.chain().focus().setHardBreak().run()}
          className={editor.isActive('blockquote') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}>
          hard break
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().undo().run()}
          className={editor.isActive('blockquote') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .undo()
              .run()
          }
        >
          undo
        </button>
        <button
        type='button'
          onClick={() => editor.chain().focus().redo().run()}
          className={editor.isActive('blockquote') ? 'bg-slate-600 text-slate-300 p-1 shadow-lg border-2 border-slate-500 border-rounded m-1 rounded-md' : 'p-1 shadow-lg border-2 border-slate-500 border-rounded m-1'}
          disabled={
            !editor.can()
              .chain()
              .focus()
              .redo()
              .run()
          }
        >
          redo
        </button>
          </div>
          </div>
      
    )
  }

export default MenuBar