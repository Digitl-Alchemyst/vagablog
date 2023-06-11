'use client'

import { FormattedPost } from '@/app/types';
import React, { useState } from 'react';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import SocialLinks from '@/components/global/SocialLinks';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import MenuBar from '@/components/Editor/menuBar';


type Props = {
    post: FormattedPost;
}

const Content = ({ post }: Props) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const [title, setTitle] = useState<string>(post.title);
    const [titleError, setTitleError] = useState<string>('');

    const [content, setContent] = useState<string>(post.content);
    const [contentError, setContentError] = useState<string>('');

    const handleIsEditable = (bool: boolean) => {
        setIsEditable(bool);
        editor?.setEditable(bool);
    }

    const editor = useEditor({
          extensions: [
            StarterKit,
          ],
          content: '<p>Hello World!</p>',
        })
    

    const handleSubmit = (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        console.log('submit');
    }

  return (
    <div className='prose w-full max-w-full mb-10'>

        {/* Breadcrumbs  */}
        <h5 className='text-slate-300 text-2xl font-bold mb-5 bg-lime-800 p-2 rounded-md shadow-md'>{`Home > ${post.category} > ${post.title}`}</h5>
        
        {/* Category & Edit Button */}
        <div className='flex justify-between items-center mb-5'>
            <h4 className='bg-violet-600 py-2 px-5 text-slate-800 text-md font-bold rounded-md shadow-lg'>{post.category}</h4>
            <div className='mt-4'>
                {isEditable ? (
                    <div className='flex justify-between gap-5'>
                        <button onClick={() => handleIsEditable(!isEditable)}>
                            <XMarkIcon className='h-6 w-6 text-amber-600' />
                        </button>
                    </div>
                ) : (
                    <button onClick={() => handleIsEditable(!isEditable)}>
                        <PencilSquareIcon className='h-6 w-6 text-amber-600' />
                    </button>
                )}
            </div>
        </div>

        <form onSubmit={handleSubmit}>

        
            {/* Title Header */}
            <>
            {isEditable ? (
            <div>
                <textarea
                    className='w-full bg-slate-800 text-slate-300 rounded-md shadow-md mb-5 p-3 border-2'
                    placeholder='Title'
                    onChange={(e) => console.log('title', e.target.value)}
                    value={title}
                />
            </div>
            ) : (
            <h2 className='text-4xl font-bold mb-5 mt-3'>{title}</h2>
            )}
            <div className='flex gap-3 items-center'>
                <h4 className='text-slate-500 text-sm font-semibold pb-3'>{post.author}</h4>
                <h5 className='text-slate-500 text-sm'>{post.createdAt}</h5>
            </div>
            </>
            
            {/* Image  */}
            <div className='relative w-auto mt-2 mb-15 h-96'>
                <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    sizes='(max-width: 480px) 100vw, (max-width: 768px) 85vw, (max-width: 1060px) 75vw, 1536px'
                    style={{ objectFit: 'cover' }}
                    className='rounded-md shadow-md' 
                />
            </div>

            {/* Article Editor  */}
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

            {/* Submit Edit Button  */}
            {isEditable && (
                <div className='flex justify-end'>
                    <button 
                        className='bg-lime-800 hover:bg-slate-400/40 text-slate-300 font-semibold py-2 px-5 mt-5 rounded-md shadow-md'
                        type='submit'
                    >
                        Submit Edit
                    </button>
                </div>
            )}
        </form>
        
        {/* Social Link  */}
        <div className='hidden md:block mt-10 w-1/5'>
            <SocialLinks isDark />
        </div>
    </div>
  )
}

export default Content