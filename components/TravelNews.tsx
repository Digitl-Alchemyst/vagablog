import React from 'react'
import Card from './Card'

type Props = {}

const TravelNews = (props: Props) => {
  return (
    <section className='mt-10'>TravelNews

      <hr className='border-1 border-slate-900'/>

      {/* Header */}
      <div className='flex items-center gap-3 my-8 mx-2 bg-teal-400'>
        <h4 className='bg-amber-400 py-2 px-5 text-lg font-bold text-slate-500 m-1 rounded-lg motion-safe:animate-pulse shadow-lg'>
          Travel News
        </h4>
        <p className='text-slate-500 text-sm'>
          #travel #travelblog #travelnews #wanderlust My latest trips through the world of digital travel.
        </p>
      </div>
    
      {/* Card Rows  */}
      <div className='sm: flex justify-between gap-8'>
        <Card
          className='basis-1/3 bg-lime-700 rounded-md shadow-xl mt-5 sm:mt-0'
          imageHeight='h-80'
        />
        <Card
          className='basis-1/3 bg-violet-700 rounded-md shadow-xl mt-5 sm:mt-0'
          imageHeight='h-80'
        />
        <Card
          className='basis-1/3 bg-sky-700 rounded-md shadow-xl mt-5 sm:mt-0'
          imageHeight='h-80'
        />
        </div>

      <div className='my-8'>
        <Card
          className='sm:flex justify-between items-center gap-3 mt-7 mb-5 bg-amber-700 rounded-md shadow-xl sm:mt-0'
          imageHeight='h-80'
        />
       </div>

      
    </section>
  )
}

export default TravelNews