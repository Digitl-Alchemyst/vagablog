import React from 'react'
import Link from 'next/link'
import { Post } from '@prisma/client'
import Image from 'next/image'


type Props = {
    className?: string;
    post: Post;
    imageHeight?: string;
    isSmallCard?: boolean;
    isLargeCard?: boolean;
}

const Card = ({
    className,
    imageHeight,
    post,
    isSmallCard = false,
    isLargeCard = false,
}: Props) => {
    const { id, title, author, createdAt, image, snippet } = post || {};
    const date = new Date(createdAt);
    const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;
    const formattedDate = date.toLocaleDateString('en-US', options);

  return (

    <div className={className}>
        
        <Link className='basis-full hover:opacity-70'
            href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
        >
        <div className={`relative w-auto mb-3 rounded-md p-1 overflow-hidden ${imageHeight}`}>
        {/* <div className='z-0 relative w-full h-full rounded-md overflow-hidden'> */}
                <Image
                    src={image}
                    alt={title}
                    fill
                    placeholder='blur'
                    sizes='(max-width: 480px) 100vw,
                        (max-width: 768px) 75vw,
                        (max-width: 1060px) 50vw,
                        33vw'
                    style={{ objectFit: 'cover' }}
                />
        </div>
        </Link>
        <div className='basis-full'>
            
            <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
                <h4 className={`font-bold hover:text-lime-300
                        ${isSmallCard ? 'text-base' : 'text-lg'}
                        ${isSmallCard ? 'line-clamp-2' : ''}
                    `}
                >
                    {title}
                </h4>
            </Link>

            <div className={`${isSmallCard ? 'my-2' : 'flex my-3'} gap-3 p-1 inline-block bg-rose-400`}>
                <h5 className='text-sm font-semibold text-slate-300'>{author}</h5>
                <h6 className='text-sm  text-slate-200'>{formattedDate}</h6>
            </div>

            <p className={`text-slate-200 p-1 bg-fuchsia-800 rounded-md ${
                    isLargeCard ? 'line-clamp-5' : 'line-clamp-3'
                }`}
            >
                {snippet}
            </p>

        </div>    

      

    </div>


  );
};

export default Card;