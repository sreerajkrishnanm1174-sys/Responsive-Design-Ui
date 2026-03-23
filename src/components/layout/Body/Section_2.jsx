import React from "react";
import Headpara_2 from "../section/Headpara_2";
import Cards from "../../Cards/Cards";
import ImgCard_2 from "../../Cards/ImgCard_2";
import NameIconbtn from "../../Button/NameIconbtn";
import RIghtArrow from "../../Icons/RIghtArrow";
import MainSection from "../section/MainSection";

function Section_2(props) {
  return (
    <>
      <MainSection>
        <Headpara_2
          head="Elevating Card Programs with Cutting-Edge Technology"
          para="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          btn={
            <NameIconbtn
              name="Compare all Pro features"
              icon={<RIghtArrow />}
              className="text-purple-900 px-4 py-2 font-semibold"
            />
          }
        />
        <br />
        <br />
        <Cards className=" items-center justify-center gap-[32px]">
          <ImgCard_2
            src="Images/mobile.png"
            alt="Mobile"
            className="bg-[#bcb2ef6b] max-w-[592px] h-[490px] px-10 pt-10 lg:px-10 lg:pt-10  flex-1 "
          />
          <ImgCard_2
            src="Images/spending.png"
            alt="Spending"
            className="bg-[#bcb2ef6b] max-w-[592px] h-[490px] px-13 py-13 lg:p-25  flex-1"
          />
        </Cards>
      </MainSection>
    </>
  );
}

export default Section_2;
