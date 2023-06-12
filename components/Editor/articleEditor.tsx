import { EditorContent, Editor } from '@tiptap/react';
import React from 'react'
import MenuBar from './menuBar';

type Props = {
    contentError: string;
    editor: Editor | null;
    isEditable: boolean;
    setContent: (content: string) => void;
    title: string;
}

const ArticleEditor = ({
    contentError,
    editor,
    isEditable,
    setContent,
    title,
}: Props) => {
    if (!editor) {
        return null;
    }
  return (
    <article className='text-slate-400 leading-8'>
        <div className={
            isEditable 
            ? 'border-2 rounded-sm bg-slate-100 p-3' 
            : 'w-full max-w-full'
            }
        >
            {isEditable && (
                <>
                    <MenuBar editor={editor} />
                    <hr className='border-1 mt-2 mb-5' />
                </>
            )}
            <EditorContent editor={editor} />
        </div>
        {contentError && <p className='text-rose-700 text-sm mt-1'>{contentError}</p>}
    </article>
  )
}

export default ArticleEditor