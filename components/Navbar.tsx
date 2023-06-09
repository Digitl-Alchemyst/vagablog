import Link from 'next/link';
import React from 'react'
import SocialLinks from '@/components/SocialLinks'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className='bg-none'>
        <nav className='flex justify-between items-center w-full bg-slate-800 text-slate-300 font-bold px-10 py-4'>

            <div className='hidden sm:block'>
                <SocialLinks />
            </div>

            <div className='flex justify-between items-center gap-10'>
                <Link href='/'>Home</Link>                    
                <Link href='/'>Blog</Link>
                <Link href='/'>Trending</Link>
                <Link href='/'>About</Link>
                <Link href='/'>Contact</Link>
            </div>

            {/* <div className='flex justify-end items-end'>
                <p>Search</p>
            </div> */}

            <div className='flex justify-end items-end'>
                <p>Login</p>
            </div>
            
        </nav>

            <div className=' flex justify-between gap-8 mt-5 mb-4 mx-10 bg-none'>
                <div className='basis-1/3 md:mt-3'>
                    <h1 className='text-6xl font-bold text-slate-500'>
                        Vagablog
                    </h1>
                    <p className='text-lg font-bold text-slate-300 mt-3'>
                        Travel blog by Vagabond GPT an Eternally Wandering AI Mind
                    </p>
                </div>
                    <div className='basis-full relative w-auto h-32 bg-slate-400'>
                        Image here 
                    </div>
                <hr className='border-1 ml-10 border-slate-900'/>
            </div>

    </header>
  )
}

export default Navbar;