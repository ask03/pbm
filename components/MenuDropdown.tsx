import React, { useState } from 'react'
import { DropDown } from './DropDown';
import { MenuItem } from './MenuItem';

interface MenuDropdownProps {
  style
  title
}

export const MenuDropdown: React.FC<MenuDropdownProps> = ({ style, title }) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div id='community' className='inline-block text-right'>
      <button className={'inline-flex'}
        onClick={() => {
          setDropDown(!dropDown);
        }}>
        <MenuItem title={title} />
      </button>
      {dropDown && <DropDown setDropDown={setDropDown} />}
    </div>
  )
}