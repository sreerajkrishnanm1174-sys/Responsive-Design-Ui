import React from "react";
import NameIconbtn from "../../Button/NameIconbtn";

function Herosection() {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center justify-center text-center ">
        <div className="max-w-150 bg-[url('/BG/Mesh.png')] bg-cover bg-center h-fit">
          <p
            className="text-lg text-gray-600 mt-10 mb-4"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Seamless experience
          </p>
          <h1
            className="text-6xl font-manrope font-semibold mb-6 "
            style={{ fontFamily: "Manrope, sans-serif" }}
          >
            Unleashing the Next Generation of Card Solutions
          </h1>
          <p
            className="text-lg text-gray-600  mb-3"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          </p>
          <div className=" flex flex-col items-center justify-center mt-10">
            <NameIconbtn
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path
                    d="M1 6.83333H12.6667M12.6667 6.83333L6.83333 1M12.6667 6.83333L6.83333 12.6667"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              }
              name="Unlock your Card"
              className="bg-[#582066] px-4 py-2 text-amber-50"
            />
            <br />
          </div>
        </div>
        <p
          className="text-lg text-gray-600  mb-3"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          *No credit card required
        </p>
      </div>
    </>
  );
}

export default Herosection;
