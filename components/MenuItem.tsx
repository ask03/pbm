import React from 'react'

interface MenuItemProps {
  title: string
  icon?: any
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
  return (
    <div className='text-shadow font-medium text-[1rem] sm:text-[1.24rem] text-gray-200 hover:text-white mx-3 hidden xs:flex'>
      <div>{title}</div>
      {icon}
    </div>
  )
}