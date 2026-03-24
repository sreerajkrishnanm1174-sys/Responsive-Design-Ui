import React from "react";

function Headpara_2(props) {
  return (
    <div className=" max-w-150 h-fit text-center">
      <h1
        className=" text-3xl lg:text-[40px] md:text-[40px] font-manrope font-semibold mb-4 "
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {props.head}
      </h1>
      <p
        className="text-[18px]  text-[#5A6475] leading-[28px]"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {props.para}
      </p>
      <div className=" flex flex-col items-center justify-center mt-5 text-xl">
        {props.btn}
        <br />
      </div>
    </div>
  );
}

export default Headpara_2;
