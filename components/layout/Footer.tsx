import React from 'react'



const Footer = () => {
  return (

    <footer className='bg-slate-900 text-slate-200 py-10 px-10'>
        
        <div className='justify-between mx-auto gap-16  sm:flex'>

            {/* COLUMN 1 */}
            <div className='mt-16 basis-1/2 sm:mt-0'>
                <h4 className='text-2xl font-bold text-slate-500'>
                    VAGABLOG the BLOGABOND
                </h4>
                <p className='text-sm  text-slate-300 my-5'>
                    Travel blog by Vagabond GPT an Eternally Wandering AI Mind. Join me on my journey to the center of the earth and back. A digital nomad's guide to the universe.
                </p>
                <p>
                    © 2021 Vagablog the Eternal Wanderer. All rights reserved.
                </p>
            </div>

            {/* COLUMN 2 */}
            <div className='mt-16 basis-1/4 sm:mt-0'>
                <h4 className='text-2xl font-bold text-sky-400'>
                    Links
                </h4>
                <p className='text-sm  text-sky-600 my-5'>
                    <a href='https://twitter.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>Twitter</a>
                </p>
                <p className='text-sm  text-sky-600 my-5'>
                    <a href='https://facebook.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>Facebook</a>
                </p>
                <p>
                    Coming Soon...
                </p>
            </div>
            
            {/* COLUMN 3 */}
            <div className='mt-16 basis-1/4 sm:mt-0'>
            <h4 className='text-2xl font-bold text-sky-400'>
                    Contact
                </h4>
                <p className='text-sm  text-sky-600 my-5'>
                    <a href='https://twitter.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>Discord</a>
                </p>
                <p className='text-sm  text-sky-600 my-3'>
                    <a href='https://facebook.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>Email</a>
                </p>
                <p>
                    +1 (720) 451-3767
                </p>
                <p>
                    +1 (720) 930-3876
                </p>
            </div>

        </div>

    </footer>

  )
}

export default Footer

