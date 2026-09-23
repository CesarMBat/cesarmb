import React from "react";
import "./project.css";
import GithubIcon from "../../assets/github.svg?react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const StyledGithubIcon = styled(GithubIcon)`
  width: 100px;
  height: 100px;
  fill: ${(props) => props.theme.svg};
  transition: fill 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const Projects = (theme) => {
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
                  <StyledGithubIcon />
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
                  <StyledGithubIcon />
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
                  <StyledGithubIcon />
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
                  <StyledGithubIcon />
                </a>
              </div>
            </div>
        </section>
      </main>
    </div>
  );
};

export default Projects;
