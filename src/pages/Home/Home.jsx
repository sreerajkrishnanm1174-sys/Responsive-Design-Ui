import React from "react";

import Herosection from "../../components/layout/Body/Herosection";
import Brandsection from "../../components/layout/Body/Brandssection";
import Features_Section from "../../components/layout/Body/Features_Section";
import About from "../../components/layout/Body/About";
import Achievements from "../../components/layout/Body/Achievements";
import Testimonial from "../../components/layout/Body/Testimonial";
import Call_To_Action from "../../components/layout/Body/Call_To_Action";

function Home() {
  return (
    <div className="h-fit  w-full p-5 flex flex-col items-center justify-center gap-10">

      <Herosection />
      <Brandsection />
      <About/>
      <Features_Section/>
      <Achievements/>
      <Testimonial/>
      <Call_To_Action/>
    </div>
  );
}

export default Home;
