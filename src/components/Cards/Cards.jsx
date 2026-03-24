import React from 'react'

function Cards({children,className}) {
  return (
   <div className={`p-10 container mx-auto max-w-full flex flex-col  lg:flex-row  gap-[32px] ${className}`}>
        {children}
    </div>
  )
}

export default Cards