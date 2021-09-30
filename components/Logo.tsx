import React from 'react'
import Link from 'next/link'
import Svg from '../public/logo.svg'

interface LogoProps {

}

export const Logo: React.FC<LogoProps> = ({ }) => {
  return (
    <Link href='/'>
<<<<<<< HEAD
      <div className='tracking-wide flex  items-center leading-none text-shadow font-alfa text-[1.75rem]'>
=======
      <div className='cursor-pointer tracking-wide flex text-white items-center leading-none text-shadow font-alfa text-[1.75rem]'>
>>>>>>> e1639cca86ad25d7febf8273d58979e9b96c9bf6

        <div className='logo-svg'>
          <Svg />
        </div>

        <div className='logo-text pl-2 text-center hidden sm:flex flex-col'>
            <p className=''>PLAYBIRD</p>
            <p className=''>MANSION</p>
        </div>

      </div>
    </Link>
  )
}