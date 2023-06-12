import React from 'react'
import { Editor } from '@tiptap/react'
import { FormattedPost } from '@/app/types';
import { PencilSquareIcon, XMarkIcon } from '@heroicons/react/24/solid';

type Props = {
    isEditable: boolean;
    handleIsEditable: (isEditable: boolean) => void;
    title: string;
    setTitle: (title: string) => void;
    tempTitle: string;
    setTempTitle: (tempTitle: string) => void;
    tempContent: string;
    setTempContent: (tempContent: string) => void;
    editor: Editor | null;
    post: FormattedPost;
}

const categoryEdit = ({
    isEditable, 
    handleIsEditable,
    title,
    setTitle,
    tempTitle,
    setTempTitle,
    tempContent,
    setTempContent,
    editor,
    post,
}: Props) => {
    const handleEnableEdit = () => {
        handleIsEditable(!isEditable);
        setTempTitle(title);
        setTempContent(editor?.getHTML() || '');
      }

    const handleCancelEdit = () => {
        handleIsEditable(!isEditable);
        setTitle(tempTitle);
        editor?.commands.setContent(tempContent);
    }


  return (
    <div className='flex justify-between items-center mb-5'>
            <h4 className='bg-violet-600 py-2 px-5 text-slate-800 text-md font-bold rounded-md shadow-lg'>{post.category}</h4>
            <div className='mt-4'>
                {isEditable ? (
                    <div className='flex justify-between gap-5'>
                        <button onClick={handleCancelEdit}>
                            <XMarkIcon className='h-6 w-6 text-amber-600' />
                        </button>
                    </div>
                ) : (
                    <button onClick={handleEnableEdit}>
                        <PencilSquareIcon className='h-6 w-6 text-amber-600 bg' />
                    </button>
                )}
            </div>
        </div>
  )
}

export default categoryEdit