import React from 'react'

function AnnouncementArea() {
  return (
    <div className="container mx-auto flex py-4 px-2 md:px-6 justify-center items-center gap-4">
        <span className='px-3 py-1 rounded-full  bg-[#E6E7E9]  text-xs md:text-xl md:px-4 md:py-1 lg:text-sm'>Announcement</span>

        <p className=' text-gray-500 text-xs lg:text-lg md:text-xl'>
            We are happy to announce that we raise $2 Million in Seed Funding
            
        </p>
    </div>
  )
}

export default AnnouncementArea