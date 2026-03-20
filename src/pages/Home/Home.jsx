import React from "react";
import Header from "../../components/layout/Header/Header";
import Footer from "../../components/layout/Footer/Footer";

import Body from "../../components/layout/Body/Body";

function Home() {
  return (
    <div className=" container mx-auto  max-w-screen  ">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Home;
