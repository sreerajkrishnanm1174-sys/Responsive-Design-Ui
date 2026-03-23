import React from "react";
import Herosection from "./Herosection";
import Brandssection from "./Brandssection";
import Section_1 from "./Section_1";
import Section_2 from "./Section_2";
import Section_3 from "./Section_3";
import Section_4 from "./Section_4";
import Section_5 from "./Section_5";

function Body() {
  return (
    <div className="h-fit  w-full p-10 lg:px-20 flex flex-col items-center justify-center gap-10">
      <Herosection />
      <Brandssection />
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
    </div>
  );
}

export default Body;
