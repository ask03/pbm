import React from 'react'
import { MintApp } from './MintApp';

interface MintModalProps {
  setOpenModal
  contract
}

export const MintModal: React.FC<MintModalProps> = ({ setOpenModal, contract }) => {
  return (
    <div className=' z-40 fixed left-0 top-0 modal-bg w-full h-screen bg-transparent flex justify-center items-center'>
      <div className='relative modal-container rounded-2xl bg-[#2B2B2B] shadow-2xl flex flex-col p-5'>
        <div className='modal-close flex justify-end'>
          <button className='text-[#949494] hover:text-[#bebebe] rounded-lg hover:bg-white hover:bg-opacity-10 px-2 bg-transparent cursor-pointer text-[25px]'
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className='pb-2 modal-title inline-block text-center text-[2rem] font-semibold'>
            Mint a Bird 🎉
        </div>
        <div className='modal-body flex justify-center items-center text-center'>
          <MintApp contract={contract} />
        </div>
      </div>
    </div>
  )
}