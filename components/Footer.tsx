import React from 'react'
import { FooterItem } from './FooterItem'
import { TwitterFill, DiscordFill } from 'akar-icons'

interface FooterProps {

}

export const Footer: React.FC<FooterProps> = ({ }) => {
  return (
    <footer className='flex flex-col items-center justify-center text-f1 pb-2 font-light mt-24'>
      <div className='flex flex-row pb-2'>
        <a href={'https://twitter.com/PlayBirdMansion'} target='_blank'>
          <TwitterFill fill='white' size='30' />
        </a>
        <div className='py-4 px-2' />
        <a href={'https://discord.gg/hujxVvKmD4'} target='_blank'>
          <DiscordFill fill='white' size='30' />
        </a>
      </div>
      <FooterItem name='Play Bird Mansion | All Rights Reserved' href='' />
    </footer>
  )
}