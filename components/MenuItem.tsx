import React from 'react'

interface MenuItemProps {
  title: string
  icon?: any
}

export const MenuItem: React.FC<MenuItemProps> = ({ title, icon }) => {
  return (
    <div className='text-shadow font-medium text-[1.24rem] text-gray-200 hover: mx-3'>
      <div>{title}</div>
      {icon}
    </div>
  )
}