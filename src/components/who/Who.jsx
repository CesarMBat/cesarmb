import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import "./who.css";
import eu_imgs from "../../assets/mini-eu";
import { useTranslation } from "react-i18next";

const Who = () => {
  const {t} = useTranslation();

  
  return (
    <div>
      <main className="main-who main">
        <div className="div-sections">
          <section className="section-left-who">
            <h1>{t('quem')}</h1>
            <p className="p-section">
              {t('pWho')}
            </p>
          </section>
          <section className="section-right">
            <Carousel controls={false} indicators={false}>
              <Carousel.Item interval={1500}>
                <img src={eu_imgs.a} alt="" className="d-block w-100 carousel-img"/>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src={eu_imgs.b} alt="" className="d-block w-100 carousel-img"/>
              </Carousel.Item>
              <Carousel.Item interval={1500}>
                <img src={eu_imgs.c} alt="" className="d-block w-100 carousel-img"/>
              </Carousel.Item>
            </Carousel>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Who;
