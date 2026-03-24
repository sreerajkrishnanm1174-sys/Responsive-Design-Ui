import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header/Header.jsx";
import Footer from "./components/layout/Footer/Footer.jsx";
import AnnouncementArea from "./components/layout/section/AnnouncementArea.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AnnouncementArea />
      <Header />
      <App />
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
