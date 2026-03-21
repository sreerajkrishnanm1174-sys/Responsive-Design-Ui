import React from 'react'

function MainSection({children}) {
  return (
    <div className="container mx-auto max-w-full h-fit flex flex-col items-center justify-center py-10">
        {children}
    </div>
  )
}

export default MainSection