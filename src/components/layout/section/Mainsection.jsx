import React from 'react'

function MainSection({children}) {
  return (
    <section className="container mx-auto max-w-full h-fit flex flex-col items-center justify-center py-10">
        {children}
    </section>
  )
}

export default MainSection