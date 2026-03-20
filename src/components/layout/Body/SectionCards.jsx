import React from "react";

function SectionCards(props) {
  return (
    <div className="max-w-150 bg-[url('/BG/Mesh.png')] bg-cover bg-center h-fit">
      <h1
        className="text-6xl font-manrope font-semibold mb-6 "
        style={{ fontFamily: "Manrope, sans-serif" }}
      >
        {props.head}
      </h1>
      <p
        className="text-lg text-gray-600  mb-3"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {props.para}
      </p>
      <div className=" flex flex-col items-center justify-center mt-10">
        {props.btn}
        <br />
      </div>
    </div>
  );
}

export default SectionCards;
