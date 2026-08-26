import React from "react";
import "./project.css";
import git from "../../assets/github.svg";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const {t} = useTranslation()
  return (
    <div>
      <main className="main-proj">
        <h1 style={{ textAlign: "center" }}>{t("proj")}</h1>
        <section className="section-proj">
            <div className="div-project">
              <h2>{t('tProj1')}</h2>
              <div className="div-2">
                <p>
                  {t('pProj1')}
                </p>
                <a
                  href="https://github.com/CesarMBat/reciclarte-project"
                  className="a-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={git} alt="Logo do GitHub" className="git w-100"/>
                </a>
              </div>
            </div>
            <div className="div-project">
              <h2>{t('tProj2')}</h2>
              <div className="div-2">
                <p>{t('pProj2')}</p>
                <a
                  href="https://github.com/CesarMBat/PI_S2G7"
                  className="a-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={git} alt="Logo do GitHub" className="git w-100"/>
                </a>
              </div>
            </div>
            <div className="div-project">
              <h2>{t('tProj3')}</h2>
              <div className="div-2">
                <p>{t('pProj3')}</p>
                <a
                  href="https://github.com/CesarMBat/furia-exercise"
                  className="a-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={git} alt="Logo do GitHub" className="git w-100"/>
                </a>
              </div>
            </div>
            <div className="div-project">
              <h2>{t('tProj4')}</h2>
              <div className="div-2">
                <p>{t('pProj4')}</p>
                <a
                  href="https://github.com/CesarMBat/my-website"
                  className="a-nav"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={git} alt="Logo do GitHub" className="git w-100"/>
                </a>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
