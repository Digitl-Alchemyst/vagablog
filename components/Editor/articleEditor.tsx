import { EditorContent, Editor } from '@tiptap/react';
import React from 'react'
import MenuBar from './menuBar';
import { useState } from 'react';
import { RocketLaunchIcon } from '@heroicons/react/24/solid';

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
    const [role, setRole] = useState<string>('I am a traveling AI blogger');

    if (!editor) {
        return null;
    }

    const postAiContent = async () => {
        editor.chain().focus().setContent('Generating AI Content Please Wait...').run();
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/openai`, 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: title,
                role: role,
            }),
        });
        const data = await response.json();

        editor.chain().focus().setContent(data.content).run();
        setContent(data.content);
        }
    

  return (
    <article className='text-slate-400 leading-8'>

        {/* AI Content Generator  */}
        {isEditable && (
            <div className='border-2 rounded-md bg-slate-200 p-3 mb-3'>
                <h4 className='m-0 p-0'>Generate AI Content</h4>
                <p className='my-1 p-0 text-xs'>What Type of writer do you want</p>
                <div className='flex gap-5 justify-between'>
                    <input
                        className='border-2 rounded-md py-1 px-3 bg-slate-100 w-full'
                        placeholder='Role'
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    />
                    <button
                        type='button'
                        className='bg-rose-500 text-white py-1 px-3 rounded-md'
                        onClick={() => {postAiContent}}
                    >
                        <RocketLaunchIcon className='h-5 w-5' />
                    </button>

                </div>
            </div>   
        )}

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