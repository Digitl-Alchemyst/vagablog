import React from 'react'
import Link from 'next/link'
import { Post } from '@prisma/client'
import Image from 'next/image'

type TrendingCardProps = {
    className?: string;
    post: Post;
}

const TrendingCard = ({ className, post }: TrendingCardProps) => {
    return (
        <Link
            className={`${className}: sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-75 transition ease-in-out duration-150 rounded-md shadow-xl`}
            href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
        >
            <div className='z-0 relative w-full h-full rounded-md overflow-hidden'>
                <Image
                    src={post?.image}
                    alt={post?.title}
                    fill
                    placeholder='blur'
                    sizes='(max-width: 480px) 100vw,
                        (max-width: 768px) 75vw,
                        (max-width: 1060px) 50vw,
                        33vw'
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className='z-1 absolute top-0 left-0 w-full h-full bg-gradient-gradual rounded-md shadow-2xl' />
                <div className='z-2 absolute bottom-0 left-0 p-3 bg-slate-400/30 rounded-lg m-2 shadow-xl'>
                    <h4 className='inline-block px-5 py-1 font-semibold bg-rose-600 text-slate-300 rounded-md shadow-lg'>
                        {post?.category}
                    </h4>
                    <div className='mt-2 text-slate-200'>
                        {post?.title}
                    </div>
                </div>
            
        </Link>
    )
}

type Props = {
    trendingPost: Array<Post>;
};

const Trending = ({ trendingPost }: Props) => {
  return (
    <section className='pt-3 pb-10'>

    {/* Trending Articles Header */}
        <div className='flex items-center gap-3 bg-teal-600 p-1'>
            <div className='bg-slate-700 py-2 px-8 text-slate-600 text-lg font-bold rounded-lg motion-safe:animate-pulse shadow-xl'>
                    Trending
            </div>
            <p className='text-slate-300 text-sm'>
                #travel #travelblog #travelnews #wanderlust
                This is what is trending in the world of digital travel for AI minds right now.
            </p>
        </div>

    {/* Trending Articles Grid */}
    <div className="sm:grid gap-5 grid-cols-5 grid-rows-2 sm:h-[600px] my-3">
            <TrendingCard className='bg-lime-700 col-span-2 row-span-2 rounded-md' post={trendingPost[0]} />
            <TrendingCard className='bg-purple-700 col-span-2 row-span-1 ' post={trendingPost[1]} />
            <TrendingCard className='bg-teal-700 col-span-1 row-span-1 ' post={trendingPost[2]} />
            <TrendingCard className='bg-amber-600 col-span-1 row-span-1 ' post={trendingPost[3]} />
            <TrendingCard className='bg-rose-600 col-span-1 row-span-1 ' post={trendingPost[4]} />
            <TrendingCard className='bg-sky-600 col-span-1 row-span-1 ' post={trendingPost[5]} />                   
        </div>

        <p>
            Trending Articles about AI Travel
        </p>
    </section>
  );
};

export default Trending;