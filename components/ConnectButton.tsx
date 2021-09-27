import React from 'react'

interface ConnectButtonProps {

}

export const ConnectButton: React.FC<ConnectButtonProps> = ({}) => {
  return (
    <button className='font-medium border-2 border-white hover:bg-white hover:bg-opacity-5 text-[1.1rem] rounded-xl shadow-md px-3 py-1 text-gray-100 hover:'>
      🎉 Connect
    </button>
  )
}
