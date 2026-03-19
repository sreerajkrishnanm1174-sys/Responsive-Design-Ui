import { useState } from "react";
import Header from "./components/layout/Header/Header";
import Footer from "./components/layout/Footer/Footer";

function App() {
  return (
    <>
      <div className="w-screen h-fit">
        <Header/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
