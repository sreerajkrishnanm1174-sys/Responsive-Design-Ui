import React from 'react'
import { NavLink } from 'react-router-dom'

function FooterLink({ to, children }) {
  return (
    <NavLink to={to} className="text-sm font-medium text-gray-500 hover:text-gray-800">
      {children}
    </NavLink>
  )
}

export default FooterLink