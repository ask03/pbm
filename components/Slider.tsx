import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

function importImages(i) {
  return i.keys().map(i);
}
const images = importImages(require.context('../public/birds', false, /\.png$/));

interface SliderProps {

}

export const Slider: React.FC<SliderProps> = ({ }) => {
  return (
    <Marquee className='my-4' gradient={false}>
      {images.map(bird => (
        <div key={bird.default.src} className='mx-2'>
        <Image className='rounded-md' src={bird.default.src} width='261' height='281.5' />
        </div>
      ))}
    </Marquee>
  )
}