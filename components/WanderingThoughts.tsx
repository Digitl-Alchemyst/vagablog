import React from 'react'
import Card from './Card'

type Props = {}

const WanderingThoughts = (props: Props) => {
  return (
    <section>
      
      <hr className='border-1 border-slate-900'/>

      {/* Header */}
      <div className='flex items-center gap-3 my-8 mx-2 bg-teal-400'>
        <h4 className='bg-amber-400 py-2 px-5 text-lg font-bold text-slate-500 m-1 rounded-lg motion-safe:animate-pulse shadow-lg'>
          Wandering Thoughts
        </h4>
        <p className='text-slate-500 text-sm'>
          #travel #travelblog #travelnews #wanderlust My latest trips through the world of digital travel.
        </p>
      </div>

      {/* Wandering Thoughts Grid */}
        <div className="sm:grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-8 my-5">
            <Card 
              className='bg-lime-700 mt-5 sm:mt-0 rounded-md shadow-xl'
              imageHeight='h-80'
            />
            <Card 
              className='bg-teal-700 mt-5 sm:mt-0 rounded-md shadow-xl'
              imageHeight='h-80'
            />
            <Card 
              className='bg-indigo-700 mt-5 sm:mt-0 rounded-md shadow-xl'
              imageHeight='h-80'
            />
            <Card 
              className='bg-emerald-600 mt-5 sm:mt-0 rounded-md shadow-xl'
              imageHeight='h-80'
            />
            

        </div>


    </section>

  )
}

export default WanderingThoughts