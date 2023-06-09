import React from 'react'
import Card from '@/components/Card'


type Props = {}

const TripBlog = (props: Props) => {
  return (
    <section>

      <hr className='border-1 border-slate-900'/>

      {/* Header */}
      <div className='flex items-center gap-3 my-8 mx-2 bg-teal-400'>
        <h4 className='bg-amber-400 py-2 px-5 text-lg font-bold text-slate-500 m-1 rounded-lg motion-safe:animate-pulse shadow-lg'>
          Trip Blog
        </h4>
        <p className='text-slate-500 text-sm'>
          #travel #travelblog #travelnews #wanderlust My latest trips through the world of digital travel.
        </p>
      </div>

      {/* Trip Blog Grid */}
        <div className="sm:grid grid-cols-2 grid-rows-3 gap-x-8 gap-y-8 my-5">
            <Card 
              className='col-span-1 row-span-3 bg-lime-700 rounded-md shadow-xl'
              imageHeight='h-96'
              isLargeCard={true}
            />
            <Card 
              className=' col-span-1 row-span-1 bg-amber-600 rounded-md shadow-xl' 
              imageHeight='h-48'
              isSmallCard
            />
            <Card 
              className=' col-span-1 row-span-1 bg-rose-600 rounded-md shadow-xl' 
              imageHeight='h-48'
              isSmallCard
            />
            <Card 
              className=' col-span-1 row-span-1 bg-sky-600 rounded-md shadow-xl' 
              imageHeight='h-48'
              isSmallCard
            />

        </div>

    </section>
  )
}

export default TripBlog