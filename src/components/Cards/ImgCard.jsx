import React from 'react'

function ImgCard({ src, alt, heading, description ,imageDivClassName,headingClassName,descriptionClassName, children}) {
  return (
    <div className="p-10 max-w-100 h-fit flex  flex-col items-center text-center gap-5">
        <div className={imageDivClassName || ''}>
            <img src={src} alt={alt} className={imageDivClassName || 'w-auto h-auto '}   />
        </div>
        <div>
            <h1 className={headingClassName || 'text-[16px] font-medium mb-2'}>{heading}</h1>
            <p className={descriptionClassName || 'text-gray-600 font-medium text-[14px] leading-[28px]'}>{description}</p>
        </div>
        {children}
    </div>
  )
}

export default ImgCard