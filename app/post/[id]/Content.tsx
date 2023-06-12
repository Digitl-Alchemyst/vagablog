'use client'

import { FormattedPost } from '@/app/types';
import React, { useState } from 'react';

import Image from 'next/image';
import SocialLinks from '@/components/global/SocialLinks';
import { Editor, EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import CategoryEdit from '@/components/Editor/categoryEdit';
import ArticleEditor from '@/components/Editor/ArticleEditor';


type Props = {
    post: FormattedPost;
};

const Content = ({ post }: Props) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const [title, setTitle] = useState<string>(post.title);
    const [titleError, setTitleError] = useState<string>("");
    const [tempTitle, setTempTitle] = useState<string>(title);

    const [content, setContent] = useState<string>(post.content);
    const [contentError, setContentError] = useState<string>("");
    const [tempContent, setTempContent] = useState<string>(content);

    const date = new Date(post?.createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;
    const formattedDate = date.toLocaleDateString('en-US', options);

    

    const handleIsEditable = (bool: boolean) => {
        setIsEditable(bool);
        editor?.setEditable(bool);
      };

    const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (title) setTitleError("");
        setTitle(e.target.value);
      };

    const handleOnChangeContent = ({ editor }: any) => {
        if (!(editor as Editor).isEmpty) setContentError('Content cannot be empty');
        setContent((editor as Editor).getHTML());
    };

    const editor = useEditor({
        extensions: [StarterKit],
        onUpdate: handleOnChangeContent,
        editorProps: {
            attributes: {
                class:
                    'prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full'
            },
        },
        content: content,
        editable: isEditable,          

    });
    

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };
    
  return (
    <div className='prose w-full max-w-full mb-10'>



        {/* Breadcrumbs  */}
        <h5 className='text-slate-300 text-2xl font-bold mb-5 bg-lime-800 p-2 rounded-md shadow-md '>{`Home > ${post.category} > ${post.title}`}</h5>
        
        {/* Category & Edit Button */}
        <CategoryEdit 
            isEditable={isEditable}
            handleIsEditable={handleIsEditable}
            title={title}
            setTitle={setTitle}
            tempTitle={tempTitle}
            setTempTitle={setTempTitle}
            tempContent={tempContent}
            setTempContent={setTempContent}
            editor={editor}
            post={post}
        />

        <form onSubmit={handleSubmit}>

        
            {/* Title Header */}
            <>
            {isEditable ? (
            <div>
                <textarea
                    className='w-full bg-slate-800 text-slate-300 rounded-md shadow-md mb-5 p-3 border-2'
                    placeholder='Title'
                    onChange={handleOnChangeTitle}
                    value={title}
                />
            </div>
            ) : (
            <h2 className='text-4xl font-bold mb-5 mt-3'>{title}</h2>
            )}
            <div className='flex gap-3 items-center'>
                <h4 className='text-slate-500 text-sm font-semibold pb-3'>{post.author}</h4>
                <h5 className='text-slate-500 text-sm'>{formattedDate}</h5>
            </div>
            </>
            
            {/* Image  */}
            <div className='relative w-auto mt-2 mb-10 h-96'>
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
            <ArticleEditor 
                contentError={contentError}
                editor={editor}
                isEditable={isEditable}
                setContent={setContent}
                title={title}
            />

            {/* Submit Edit Button  */}
            {isEditable && (
                <div className='flex justify-end'>
                    <button 
                        type='submit'
                        className='bg-lime-800 hover:bg-slate-400/40 text-slate-300 font-semibold py-2 px-5 mt-5 rounded-md shadow-md'                        
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
  );
};


export default Content