import { DiscordFill, TwitterFill } from 'akar-icons'
import React, { useEffect, useRef } from 'react'

interface DropDownProps {
  setDropDown
}

export const DropDown: React.FC<DropDownProps> = ({ setDropDown }) => {
  // const useOutsideAlerter = (ref) => {
  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if ((ref.current && !ref.current.contains(event.target)) || document.getElementById('twit').contains) {
  //         setDropDown(false);
  //       }
  //     }

  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);

  return (
    <div className='bg-black bg-opacity-75 z-[100] rounded hidden xs:flex fixed right-auto text-center text-[1rem] sm:text-[1.24rem]'>
      <div className='text-white ml-4 pr-4'>
        <a id='disc' href={'https://discord.gg/hujxVvKmD4'} target='_blank' rel="noreferrer">
          <div className='flex flex-row py-2'>
            <DiscordFill fill='white' size='20' /><div className='pl-2'>Discord</div>
          </div>
        </a>
        <a id='twit' href={'https://twitter.com/PlayBirdMansion'} target='_blank' rel="noreferrer">
          <div className='flex flex-row py-1'>
            <TwitterFill fill='white' size='20' /><div className='pl-2'>Twitter</div>
          </div>
        </a>
      </div>
    </div>
  )
}