import React from "react";
import Headpara_2 from "../section/Headpara_2";
import Cards from "../../Cards/Cards";
import ImgCard from "../../Cards/ImgCard";
import NameIconbtn from "../../Button/NameIconbtn";
import RIghtArrow from "../../Icons/RIghtArrow";
import MainSection from "../section/MainSection";

function About() {
  return (
    <MainSection>
      <Headpara_2
        head="Elevating Card Programs with Cutting-Edge Technology"
        para="consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        btn={
          <NameIconbtn
            name="Compare all Pro features"
            icon={<RIghtArrow />}
            className="text-[#582066] px-4 py-2 font-semibold text-[16px] leading-[20px] "
          />
        }
      />
      <Cards className=" items-center justify-center ">
        <ImgCard
          src="/RoundIcon/Glob.png"
          heading="Globally Accepted"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
        />
        <ImgCard
          src="/RoundIcon/Key.png"
          heading="Biometric Integrated"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
        />
        <ImgCard
          src="/RoundIcon/Lock.png"
          heading="Fully Secured"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod "
        />
      </Cards>
    </MainSection>
  );
}

export default About;
