import React from 'react'

interface MenuItemProps {
  title: string
  icon?: any
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
  return (
<<<<<<< HEAD
    <div className='text-shadow font-medium text-[1.24rem] text-gray-200 hover: mx-3'>
=======
    <div className='text-shadow font-medium text-[1rem] sm:text-[1.24rem] text-gray-200 hover:text-white mx-3 hidden xs:flex'>
>>>>>>> e1639cca86ad25d7febf8273d58979e9b96c9bf6
      <div>{title}</div>
      {icon}
    </div>
  )
}