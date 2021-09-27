import { Contract } from 'ethers';
import React, { useState } from 'react'
import { MintModal } from './MintModal';

interface MintButtonProps {
  title: string
  style: string
  contract: Contract
}

export const MintButton: React.FC<MintButtonProps> = ({ title, style, contract }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button className={style}
        onClick={() => {
          setModalOpen(true);
          }}>
        {title}
      </button>
      {modalOpen && <MintModal setOpenModal={setModalOpen} contract={contract} />}
    </div>
  )
}