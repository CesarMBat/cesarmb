import { useState, useRef } from "react";
import "./App.css";
import Swot from "./components/swot/Swot";
import Who from "./components/who/Who";
import Skills from "./components/skills/Skills";
import Obj from "./components/objective/objective";
import Projects from "./components/my_projects/projects";
import svg_flag from "./assets/flags";
import { useTranslation, initReactI18next } from "react-i18next";
import i18n from "i18next";
import enTrans from "./en.json";
import ptTrans from "./pt.json";
import Footer from "./components/footer/Footer";
import Media from "react-media";
import Nav from "./components/navMobile/Nav";

i18n.use(initReactI18next).init({
  lng: "pt", // Defina o idioma padrão aqui
  resources: {
    en: {
      translation: enTrans,
    },
    pt: {
      translation: ptTrans,
    },
  },
});
function App() {
  const { t } = useTranslation();

  const [language, setLanguage] = useState("pt");

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };
  const sectionRefs = {
    ref_Who: useRef(null),
    ref_Swot: useRef(null),
    ref_Skills: useRef(null),
    ref_Obj: useRef(null),
    ref_Proje: useRef(null),
  };
  const scrollToSecMob = (sectionId) => {
    if (sectionRefs[sectionId].current) {
      sectionRefs[sectionId].current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Media query={"(min-width: 1024px)"}>
        {(matches) => {
          return matches ? (
            <header className="header">
              <section className="section-left">
                <h1
                  className="h1-header"
                  onClick={() => scrollToSecMob("ref_Who")}
                >
                  CésarMBat
                </h1>
              </section>
              <section className="section-right">
                <ul className="ul-header">
                  <li
                    className="li-header"
                    onClick={() => scrollToSecMob("ref_Who")}
                  >
                    <a href="#who" className="a-nav">
                      {t("quem")}
                    </a>
                  </li>
                  <li className="li-header">
                    <a
                      href="#obj"
                      onClick={() => scrollToSecMob("ref_Obj")}
                      className="a-nav"
                    >
                      {t("obj")}
                    </a>
                  </li>
                  <li
                    className="li-header"
                    onClick={() => scrollToSecMob("ref_Swot")}
                  >
                    <a href="#swot" className="a-nav">
                      {t("swot")}
                    </a>
                  </li>
                  <li
                    className="li-header"
                    onClick={() => scrollToSecMob("ref_Skills")}
                  >
                    <a href="#skills" className="a-nav">
                      {t("hab")}
                    </a>
                  </li>
                  <li className="li-header">
                    <a
                      href="#proje"
                      onClick={() => scrollToSecMob("ref_Proje")}
                      className="a-nav"
                    >
                      {t("proj")}
                    </a>
                  </li>
                </ul>
              </section>
              <div className="div-lang">
                <img
                  src={svg_flag.br}
                  className="img-Flag"
                  onClick={() => handleChangeLanguage("pt")}
                />
                <img
                  src={svg_flag.uk}
                  className="img-Flag"
                  onClick={() => handleChangeLanguage("en")}
                />
              </div>
            </header>
          ) : (
            <Nav onNav={scrollToSecMob} />
          );
        }}
      </Media>
      <div ref={sectionRefs.ref_Who} id="who">
        <Who i18n={i18n} />
      </div>
      <div className="div-spc"> </div>
      <div ref={sectionRefs.ref_Obj} id="obj">
        <Obj />
      </div>
      <div className="div-spc"></div>
      <div ref={sectionRefs.ref_Swot} id="swot">
        <Swot />
      </div>
      <div className="div-spc"></div>
      <div ref={sectionRefs.ref_Skills} id="skills">
        <Skills />
      </div>
      <div className="div-spc"></div>
      <div ref={sectionRefs.ref_Proje} id="proje">
        <Projects />
      </div>
      <div style={{ height: "20rem" }}></div>
      <Footer />
    </>
  );
}

export default App;
