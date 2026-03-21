import React from 'react'

function Cards({children,className}) {
  return (
   <div className={`container mx-auto max-w-full flex flex-col  lg:flex-row gap-5 ${className}`}>
        {children}
    </div>
  )
}

export default Cards