import React from 'react'
import Image from 'next/image'
import banner from '../public/banner.png'

interface BannerProps {

}

export const Banner: React.FC<BannerProps> = ({ }) => {
  return (
    <div className='top-0 relative z-0'>
      <Image src={banner} layout='responsive' />      
    </div>
  )
}