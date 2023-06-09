import React from 'react'

const Subscribe = () => {
  return (
    <div className=' text-center bg-slate-300 px-5 py-10 rounded-md shadow-lg flex flex-col items-center'>
      <h4 className='font-semibold text-base'>Subscribe to the Wandering Newsletter</h4>
      <p className='text-slate-500 my-3 w-5/6 mx-auto'>
        Get the latest posts delivered right to your inbox
      </p>
      <input 
        className='text-center w-3/6 min-w-[100px] px-5 py-2 border-2 border-slate-500 rounded-md'
        placeholder='Enter your email address'
      />
      <button className='bg-amber-500 text-slate-800 font-semibold text-lg w-1/6 min-w-[100px] px-5 py-2 rounded-md my-3 mt-3'>
        Subscribe
      </button>
      

    </div>
  )
}

export default Subscribe