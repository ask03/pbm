import React from 'react'
import Link from 'next/link'

interface FooterItemProps {
  name: String
  href: any
}

export const FooterItem: React.FC<FooterItemProps> = ({ name, href }) => {
  return (
    <Link href={href}>
      <div className='mx-1 px-1 '>{name}</div>
    </Link>
  )
}