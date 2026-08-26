import './skills.css'
import img_skills from "../../assets/skills";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import { useTranslation } from 'react-i18next';


const Skills = () => {
  const { t } = useTranslation()
  return (
    <div>
      <main className="main-skills">
        <section className="section-left">
          <h1>{t("hab")}</h1>
          <section className="section-skills">
            <ul>
              <li>{t("liH1")}</li>
              <li>{t("liH2")}</li>
              <li>{t("liH3")}</li>
              <li>{t("liH4")}</li>
              <li>{t("liH5")}</li>
              <li>{t("liH6")}</li>
              <li>{t("liH7")}</li>
            </ul>
          </section>
        </section>
        <section className="section-right">
          <Carousel controls={false} indicators={false}>
            <Carousel.Item interval={1500}>
              <img src={img_skills.a} className="d-block w-100 svg" />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img src={img_skills.b} className="d-block w-100 svg" />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img src={img_skills.c} className="d-block w-100 svg" />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img src={img_skills.d} className="d-block w-100 svg" />
            </Carousel.Item>
          </Carousel>
        </section>
      </main>
    </div>
  );
};

export default Skills;
