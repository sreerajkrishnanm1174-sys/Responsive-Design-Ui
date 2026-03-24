import React from 'react'

function ImgCard_2({src,alt, className}) {
  return (
    <div className={`flex items-center justify-center lg:gap-30  ${className}`}>
        <img src={src} alt={alt} className='max-w-full lg:max-w-fit h-full'/>
    </div>
  )
}

export default ImgCard_2