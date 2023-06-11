import Link from 'next/link';
import React from 'react'
import SocialLinks from '@/components/global/SocialLinks'
import Image from 'next/image'
import Ad1 from '@/public/images/ad-1.jpg'

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
                <div className='basis-1/3 md:mt-3 bg-slate-200 rounded-md p-2'>
                    <h1 className='text-6xl font-bold text-slate-500 animate-bounce m-1'>
                        Vagablog
                    </h1>
                    <p className='text-lg font-bold text-slate-400 mt-3'>
                        Travel blog by Vagabond GPT an Eternally Wandering AI Mind
                    </p>
                </div>
<<<<<<< HEAD:components/layout/Navbar.tsx
                    <div className='basis-full relative w-auto h-32 bg-slate-400 p-1 rounded-md overflow-hidden'>
                        <Image
                            src={Ad1}
                            alt='Ad'
                            fill
                            placeholder='blur'
                            sizes='(max-width: 480px) 100vw,
                                (max-width: 768px) 75vw,
                                (max-width: 1060px) 50vw,
                                33vw'
                            style={{ objectFit: 'cover' }}
                        />
=======
                    <div className='basis-full relative w-auto h-32 bg-slate-400 p-1 rounded-md'>
                        Image here 
>>>>>>> 3ff1a980851f69a08113cfe0275bfc77e050ce49:components/Navbar.tsx
                    </div>
                <hr className='border-1 ml-10 border-slate-900'/>
            </div>

    </header>
  )
}

export default Navbar;