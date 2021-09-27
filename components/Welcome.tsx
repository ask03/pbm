import React from 'react'

interface WelcomeProps {

}

export const Welcome: React.FC<WelcomeProps> = ({ }) => {
  return (
    <div className='overflow-x-hidden pt-8 pb-4 px-6 flex-col items-center text-center'>
      <p className=' font-poppins font-medium text-[1.1rem] sm:text-[2rem] flex-row'>
        🎉 WELCOME TO THE 🎉
      </p>
      <p className='pt-1 tracking-wide font-alfa pb-8 leading-none font-black text-[2.68rem] sm:text-[4.20rem] flex-row text-transparent bg-clip-text animate-gradient-x bg-gradient-to-r to-[#0CF2FF] from-[#F709FF] ml-2'>
        PLAY BIRD MANSION
      </p>

      <div className='pb-2 items-center text-center  text-[.8rem] sm:text-[1.1rem] px-4 sm:px-20'>
        A collection of 6,969 algorithmically generated Party Birds. Mint a Bird for access to the NFT party community, future airdrops, play-to-earn gaming and more! We party on the Polygon blockchain, so you don’t need to worry about gas fees.
      </div>
    </div>
  )
}