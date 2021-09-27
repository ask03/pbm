import React, { useState } from 'react'
import { MintModal } from './MintModal';

interface MintButtonProps {
  title: string
  style: string
}

export const MintButton: React.FC<MintButtonProps> = ({ title, style }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <button className={style}
        onClick={() => {
          setModalOpen(true);
          }}>
        {title}
      </button>
      {modalOpen && <MintModal setOpenModal={setModalOpen} />}
    </div>
  )
}