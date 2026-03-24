import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterLink({ to, children }) {
  return (
    <NavLink to={to} className="text-[16px] leading-[20px] font-medium text-[#363C46] hover:text-gray-800">
      {children}
    </NavLink>
  )
}

export default FooterLink