import React from "react";
import NameIconbtn from "../../Button/NameIconbtn";
import RIghtArrow from "../../Icons/RIghtArrow";

function Herosection() {
  return (
    <>
      <section className="w-full h-full flex flex-col items-center justify-center text-center ">
        <div className="max-w-156 bg-[url('/BG/Mesh.png')] bg-cover bg-center h-fit ">
          <p
            className="text-[i6px] text-[#582066] mt-10 mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Seamless experience
          </p>
          <h1
            className="text-[62px] font-manrope font-semibold leading-[72px] mb-5"
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Unleashing the Next Generation of Card Solutions
          </h1>
          <p
            className="text-lg text-[#5A6475]  mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <div className=" flex flex-col items-center justify-center mt-10">
            <NameIconbtn
              icon={<RIghtArrow />}
              name="Unlock your Card"
              className="bg-[#582066] p-[16px] text-amber-50 gap-[8px]"
            />
            <br />
          </div>
        </div>
        <p
          className="text-[14px] leading-[20px] text-[#5A6475]  "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          *No credit card required
        </p>
      </section>
    </>
  );
}

export default Herosection;
