import React from 'react'

function AnnouncementArea() {
  return (
    <div className="container mx-auto flex p-[8px] justify-center items-center gap-4 ">
        <span className='px-[8px] py-[4px]  border-[1px] border-[#E6E7E9]  rounded-full  bg-[#F1F1F2]  text-[12px] leading-[16px] '>Announcement</span>

        <p className=' text-gray-500 text-[12px] lg:text-[14px] md:text-[14px] font-medium ' style={{ fontFamily: "Inter, sans-serif" }}>
            We are happy to announce that we raise $2 Million in Seed Funding
            
        </p>
    </div>
  )
}

export default AnnouncementArea;