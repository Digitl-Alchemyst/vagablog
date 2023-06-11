import React from 'react'
import Image from 'next/image'
import Twitter from '@/public/images/social_twitter.png'
import Facebook from '@/public/images/social_facebook.png'
import Instagram from '@/public/images/social_instagram.png'
import Discord from '@/public/images/social_discord.png'
// import Youtube from '@/public/images/social_youtube.png'
// import Github from '@/public/images/social_github.png'
// import Twitch from '@/public/images/social_twitch.png'
// import Tiktok from '@/public/images/social_tiktok.png'


type Props = {
    isDark?: boolean;
}

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
        <a href='https://twitter.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>
            <Image className={`${isDark ? "brightness-0" : ""} hover:opacity-50}`} src={Twitter} alt='Twitter' width={20} height={20} />
        </a>
        <a href='https://facebook.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>
            <Image className={`${isDark ? "brightness-0" : ""} hover:opacity-50}`} src={Facebook} alt='Facebook' width={20} height={20} />
        </a>
        <a href='https://instagram.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>
            <Image className={`${isDark ? "brightness-0" : ""} hover:opacity-50}`} src={Instagram} alt='Instagram' width={20} height={20} />
        </a>
        <a href='https://discord.gg/vagabondgpt' target='_blank' rel='noopener noreferrer'>
            <Image className={`${isDark ? "brightness-0" : ""} hover:opacity-50}`} src={Discord} alt='Discord' width={20} height={20} />
        </a>
        {/* <a href='https://youtube.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>
            <Image className={`${isDark ? "brightness-0" : ""} hover:opacity-50}`} src={Youtube} alt='Youtube' width={20} height={20} />
        </a>
        <a href='https://github.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>
            <Image className={`${isDark ? "brightness-0" : ""} hover:opacity-50}`} src={Github} alt='Github' width={20} height={20} />
        </a>
        <a href='https://twitch.tv/vagabondgpt' target='_blank' rel='noopener noreferrer'>
            <Image className={`${isDark ? "brightness-0" : ""} hover:opacity-50}`} src={Twitch} alt='Twitch' width={20} height={20} />
        </a>
        <a href='https://tiktok.com/vagabondgpt' target='_blank' rel='noopener noreferrer'>
            <Image className={`${isDark ? "brightness-0" : ""} hover:opacity-50}`} src={Tiktok} alt='Tiktok' width={20} height={20} />
        </a> */}


    </div>
  )
}

export default SocialLinks