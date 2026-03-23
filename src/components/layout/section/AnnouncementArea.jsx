import React from 'react'

function AnnouncementArea() {
  return (
    <div className="container mx-auto flex p-[8px] justify-center items-center gap-4">
        <span className='px-[8px] py-[4px] rounded-full  bg-[#E6E7E9]  text-xs md:text-xl md:px-4 md:py-1 lg:text-sm'>Announcement</span>

        <p className=' text-gray-500 text-[12px] lg:text-[14px] md:text-[14px] font-medium ' style={{ fontFamily: "Inter, sans-serif" }}>
            We are happy to announce that we raise $2 Million in Seed Funding
            
        </p>
    </div>
  )
}

export default AnnouncementArea