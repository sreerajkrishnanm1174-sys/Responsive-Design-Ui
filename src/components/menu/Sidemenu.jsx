import React from 'react'
import Dropdown from './Dropdown'
import { NavLink } from 'react-router-dom'

function Sidemenu({open,setOpen}) {
  return (
    <>
    <div
        className={`fixed top-0 right-0 h-full w-45 bg-white shadow-lg transform transition-transform duration-300 z-50 
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* CLOSE */}
        <div className="flex justify-end p-4">
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        {/* MENU */}
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li>
            <Dropdown />
          </li>
          <li>
            <NavLink to="/banking" onClick={() => setOpen(false)}>
              Banking
            </NavLink>
          </li>
          <li>
            <NavLink to="/processing" onClick={() => setOpen(false)}>
              Processing
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => setOpen(false)}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/career" onClick={() => setOpen(false)}>
              Career
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

    </>
      
  )
}

export default Sidemenu