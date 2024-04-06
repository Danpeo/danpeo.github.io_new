import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Skills } from "./pages/Skills.tsx";
import Navbar from "./components/nav/Navbar.tsx";
import { useTranslation } from "react-i18next";
import {ScrollToTopButton} from "./components/primitives/ScrollToTopButton.tsx";

function App() {
  const [t, _] = useTranslation();
  const links = [
    { title: `${t("routes.overview")}`, url: "/" },
    { title: `${t("routes.skills")}`, url: "/skills" },
  ];
  return (
      <Suspense fallback="...loading">
        <div className="App">
          <BrowserRouter>
            <Navbar title={t("general.myName")} links={links}/>
            <ScrollToTopButton/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/skills" element={<Skills/>}/>
            </Routes>
          </BrowserRouter>
        </div>
      
      </Suspense>
  );
}

export default App;
