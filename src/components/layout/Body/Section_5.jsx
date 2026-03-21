import React from 'react'
import MainSection from '../section/MainSection'
import Headpara from '../section/Headpara'
import NameIconbtn from '../../Button/NameIconbtn'
import Card from '../../Icons/card'
import Headphone from '../../Icons/Headphone'

function Section_5() {
  return (
  <>
  <MainSection>
    <Headpara heading="Unlock Limitless Possibilities with Our New Card Solutions"
    headingClassName="text-3xl font-semibold  mb-5 max-w-2xl ">
    <div className='w-full flex flex-col   items-center justify-center mt-5 gap-2 lg:flex-row'>
        <NameIconbtn name="Unlock your card" className="bg-[#582066] px-4 py-2 text-amber-50 w-full h-fit lg:w-fit" icon={<Card/>}/>
        <NameIconbtn name="Customer support" className="bg-[#EEEFEF] px-4 py-2 text-gray-600  w-full h-fit lg:w-fit" icon={<Headphone/>}/>

    </div>

    </Headpara>
  </MainSection>
  </>
  )
}

export default Section_5