import React from 'react'

type Props = {}

const Trending = (props: Props) => {
  return (
    <section className='pt-3 pb-10'>

        <div className='flex items-center gap-3'>
            <div className='bg-slate-700 py-2 px-8 text-slate-400 text-lg font-bold rounded-lg motion-safe:animate-pulse '>
                    Trending
            </div>
            <p className='text-slate-300 text-sm'>
                #travel #travelblog #travelnews #wanderlust
                This is what is trending in the world of digital travel for AI minds right now.
            </p>
        </div>

    {/* Trending Articles Grid */}
        <div className='sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3'>
            <div className='bg-lime-700 col-span-2 row-span-2'></div>
            <div className='bg-purple-700 col-span-2 row-span-1'></div>
            <div className='bg-pink-700 col-span-1 row-span-1'></div>
            <div className='bg-orange-700 col-span-1 row-span-1'></div>                   
        </div>
        
    </section>
  )
}

export default Trending