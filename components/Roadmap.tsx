import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

interface RoadmapProps {

}

export const Roadmap: React.FC<RoadmapProps> = ({ }) => {
  return (
    <div className='overflow-x-hidden'>
      <div className='text-center text-transparent bg-clip-text animate-gradient-x bg-gradient-to-l to-[#0CF2FF] from-[#F709FF] font-extrabold text-[3rem] sm:text-[4rem] px-8 pt-8'>
        Roadmap
      </div>
      <div className='text-center  text-white text-[1.1rem] pt-2 pb-6 px-8 leading-none justify-center'>
        Join our community on&nbsp;
        <a href={'https://discord.gg/hujxVvKmD4'} target='_blank' className='hover:text-white hover:text-opacity-75 underline'>
        Discord</a>&nbsp;and&nbsp;
        <a href={'https://twitter.com/PlayBirdMansion'} target='_blank' className='hover:text-white hover:text-opacity-75 underline'>
        Twitter</a> to stay up to date with our current party plans!
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(12,242,255)', color: '#fff' }}
        >
          <h1 className='vertical-timeline-element-title text-[2rem] font-bold '>0%</h1>
          <div className=' text-[1.5rem] font-medium'>
            Launch 🚀
          </div>
          <div className=' text-[1.1rem]'>
            The Play Bird Mansion NFTs begin minting! OpenSea trading begins! Referral Contest begins!
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(247,9,255)', color: '#fff' }}
        >
          <h1 className='vertical-timeline-element-title text-[2rem] font-bold '>25% Sold</h1>
          <div className=' text-[1.5rem] font-medium'>
            Website Gallery 🖼
          </div>
          <div className=' text-[1.1rem]'>
            Ability to view all your NFT birds and download custom artwork featuring the birds in your wallet!
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(12,242,255)', color: '#fff' }}
        >
          <h1 className='vertical-timeline-element-title text-[2rem] font-bold '>50% Sold</h1>
          <div className=' text-[1.5rem] font-medium'>
            NFT Gaming 🎮
          </div>
          <div className=' text-[1.1rem]'>
            Integrated Browser Game (Flappy Bird inspired), where you can play as your Party Bird and earn rewards!
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(247,9,255)', color: '#fff' }}
        >
          <h1 className='vertical-timeline-element-title text-[2rem] font-bold '>75% Sold</h1>
          <div className=' text-[1.5rem] font-medium'>
            Charity Donation 🎗
          </div>
          <div className=' text-[1.1rem]'>
            A portion of all sales will be donated to a charity that the community votes on!
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          iconStyle={{ background: 'rgb(12,242,255)', color: '#fff' }}
        >
          <h1 className='vertical-timeline-element-title text-[2rem] font-bold '>100% Sold</h1>
          <div className=' text-[1.5rem] font-medium'>
            Airdrop 🎁
          </div>
          <div className=' text-[1.1rem]'>
            All birds will lay an Egg that is airdropped to current Play Bird Mansion NFT holders! We will list on rarity.tools & and party with more exclusive events!
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}