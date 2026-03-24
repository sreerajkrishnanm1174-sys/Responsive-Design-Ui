import React from "react";
import MainSection from "../section/MainSection";
import Cards from "../../Cards/Cards";
import TextCard from "../../Cards/TextCard";

function Achievements() {
  return (
    <>
      <MainSection>
        <Cards className=" items-center justify-center ">
          <TextCard
            heading_1="2 Million"
            heading_2="Customers"
            description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            classNameheading_1=" text-[40px] leading-[56px] lg:text-[48px] lg:leading-[56px] mb-5 text-purple-900 font-semibold"
            classNameheading_2="text-[16px] text-black font-bold mb-5"
          />
          <TextCard
            heading_1="1K"
            heading_2="Downloads"
            description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            classNameheading_1="text-[40px] leading-[56px] lg:text-[48px] lg:leading-[56px]  mb-5 text-purple-900 font-semibold"
            classNameheading_2="text-[16px] text-black font-bold mb-5"
          />
          <TextCard
            heading_1="$73 Million"
            heading_2="Transaction"
            description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            classNameheading_1="text-[40px] leading-[56px] lg:text-[48px] lg:leading-[56px]  mb-5 text-purple-900 font-semibold"
            classNameheading_2="text-[16px] text-black font-bold mb-5"
          />
          <TextCard
            heading_1="2.0"
            heading_2="Latest Version"
            description="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"
            classNameheading_1="text-[40px] leading-[56px] lg:text-[48px] lg:leading-[56px]  mb-5 text-purple-900 font-semibold"
            classNameheading_2="text-[16px] text-black font-bold mb-5"
          />
        </Cards>
      </MainSection>
    </>
  );
}

export default Achievements;
