import React from "react";

import Herosection from "../../components/layout/Body/Herosection";
import Section_1 from "../../components/layout/Body/Section_1";
import Section_2 from "../../components/layout/Body/Section_2";
import Section_3 from "../../components/layout/Body/Section_3";
import Section_4 from "../../components/layout/Body/Section_4";
import Section_5 from "../../components/layout/Body/Section_5";
import Brandsection from "../../components/layout/Body/Brandssection";

function Home() {
  return (
    <div className="h-fit  w-full p-10 lg:px-20 flex flex-col items-center justify-center gap-10">

      <Herosection />
      <Brandsection />
      <Section_1/>
      <Section_2/>
      <Section_3/>
      <Section_4/>
      <Section_5/>
    </div>
  );
}

export default Home;
