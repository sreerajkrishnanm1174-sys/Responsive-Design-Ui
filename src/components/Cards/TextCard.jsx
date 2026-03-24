import React from 'react'

function TextCard({ heading_1, heading_2, description, classNameheading_1, classNameheading_2, classNamedescription }) {
  return (
    <div className="p-10 max-w-100 h-fit flex  flex-col items-center text-center gap-2">
        <div>
            <h1 className={classNameheading_1 || 'text-xl text-semibold mb-5'} style={{ fontFamily: "Manrope, sans-serif" }}>{heading_1}</h1>
            
        </div>
        <div>
            <h1 className={classNameheading_2 || 'text-xl text-semibold mb-5'}>{heading_2}</h1>
            <p className={classNamedescription || 'text-[#5A6475] text-[16px] leading-[28px] '}>{description}</p>
        </div>
    </div>
  )
}

export default TextCard