import React from 'react'

interface ReferralProps {

}

export const Referral: React.FC<ReferralProps> = ({}) => {
  return (
    <div>
      <div className='leading-none text-center text-transparent bg-clip-text animate-gradient-x bg-gradient-to-r to-[#0CF2FF] from-[#F709FF] font-extrabold text-[3rem] px-8 pt-8 mt-8'>
        Referral Contest
      </div>
      <div className='text-center  text-white text-[1rem] pt-2 py-2 px-8 leading-none justify-center'>
        When you mint a Play Bird with a referral address, you recieve a 2 MATIC discount.
      </div>
      <div className='text-center  text-white text-[1.1rem] pb-4 px-8 leading-none justify-center'>
        The wallets with the most referred bird mints will win prizes when all birds are sold out!
      </div>
      <div className='text-center  text-white text-[1.25rem] pt-2 px-8 leading-none justify-center'>
        Prizes:
        <li className='pt-4 p-2 text-[1.2rem] font-light'>
          1st Place: 3 ETH
        </li>
        <li className='p-2 text-[1.1rem] font-light'>
          2nd Place: 2 ETH
        </li>
        <li className='p-2 text-[1rem] font-light'>
          3rd Place: 1 ETH
        </li>
        <li className='p-2 text-[.9rem] font-light'>
          4th Place: 0.5 ETH
        </li>
        <li className='p-2 text-[.9rem] font-light'>
          5th Place: 2 Free Play Bird NFTs
        </li>
        <li className='p-2 text-[.9rem] font-light'>
          6-10th Place: 1 Free Play Bird NFT
        </li>
      </div>
    </div>
  )
}