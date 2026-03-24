import React from "react";
import MainSection from "../section/MainSection";
import Headpara from "../section/Headpara";
import NameIconbtn from "../../Button/NameIconbtn";
import Headphone from "../../Icons/Headphone";
import Card from "../../Icons/Card";

function Call_To_Action() {
  return (
    <>
      <MainSection>
        <Headpara
          heading="Unlock Limitless Possibilities with Our New Card Solutions"
          headingClassName="text-[40px] leading-[48px] font-semibold  mb-5 max-w-2xl "
        >
          <div className="w-full flex flex-col   items-center justify-center mt-5 gap-[8px] lg:flex-row">
            <NameIconbtn
              name="Unlock your card"
              className="bg-[#582066] px-[16px] py-[12px] text-amber-50 w-full h-fit lg:w-fit gap-[8px] rounded-[8px]"
              icon={<Card />}
            />
            <NameIconbtn
              name="Customer support"
              className="bg-[#EEEFEF] px-[16px] py-[12px] gap-[8px] rounded-[8px] text-gray-600  w-full h-fit lg:w-fit"
              icon={<Headphone />}
            />
          </div>
        </Headpara>
      </MainSection>
    </>
  );
}

export default Call_To_Action;
