import React from 'react'
import { MenuItem } from './MenuItem'

interface MenuProps {

}

export const Menu: React.FC<MenuProps> = ({}) => {
  return (
    <div className='flex flex-row'>
      <MenuItem title={'MINT'} />
      <MenuItem title={'ROADMAP'} />
      <MenuItem title={'TEAM'} />
      <MenuItem title={'COMMUNITY'} />
      <MenuItem title={'MORE'} />
    </div>
  )
}