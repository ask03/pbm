import React from 'react'

interface PerksProps {

}

export const Perks: React.FC<PerksProps> = ({ }) => {
  return (
    <div>
      <div className='leading-none pb-2 text-center text-transparent bg-clip-text animate-gradient-x bg-gradient-to-r to-[#0CF2FF] from-[#F709FF] font-extrabold text-[3rem] px-8 pt-8 mt-8'>
        Mansion Amenities
      </div>
      <div className='text-center text-white text-[1.1rem] pb-4 px-8 leading-none justify-center'>
        When you mint a Bird you will have exclusive access to the Mansion, parties, and more benefits.
      </div>
      <div className='text-center text-white text-[1.36rem] pt-2 px-8 leading-none justify-center'>
        Including:
        <li className='pt-4 p-2 text-[1.2rem] font-light'>
          Owning full rights to your Play Bird, and able to use it however you wish.
        </li>
        <li className='pt-4 p-2 text-[1.2rem] font-light'>
          Early Access to all things Play Bird Mansion
        </li>
        <li className='pt-4 p-2 text-[1.2rem] font-light'>
          Member Only Giveaways and Contests
        </li>
        <li className='pt-4 p-2 text-[1.2rem] font-light'>
          Member Only Discord Channels
        </li>
        <li className='pt-4 p-2 text-[1.2rem] font-light'>
          IPFS Accessible Metadata
        </li>
        <li className='pt-4 p-2 text-[1.2rem] font-light'>
          NFT Airdrops
        </li>
      </div>
    </div>
  )
}