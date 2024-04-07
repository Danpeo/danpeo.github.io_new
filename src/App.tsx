import "./App.css";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import { Skills } from "./pages/Skills.tsx";
import Navbar from "./components/nav/Navbar.tsx";
import { useTranslation } from "react-i18next";
import { ScrollToTopButton } from "./components/primitives/ScrollToTopButton.tsx";
import {About} from "./pages/About.tsx";
import {Contact} from "./pages/Contact.tsx";

function App() {
  const [t, _] = useTranslation();
  const links = [
    { title: `${t("routes.overview")}`, url: "/" },
    { title: `${t("routes.skills")}`, url: "/skills" },
    { title: `${t("routes.about")}`, url: "/about" },
    { title: `${t("routes.contact")}`, url: "/contact" },
  ];
  return (
    <Suspense fallback="...loading">
      <div className="App">
        <BrowserRouter>
          <Navbar title={t("general.shortName")} links={links} />
          <ScrollToTopButton />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Suspense>
  );
}

export default App;
