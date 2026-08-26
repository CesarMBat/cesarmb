import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import { useState } from "react";
import svg_flag from "../../assets/flags";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 992px) {
    flex-flow: column nowrap;
    background-color: #8e59d7;
    z-index: 1;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    overflow-y: auto;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
    .a-mob-nav {
      text-decoration: none;
      color: #fff;
      font-size: 1.25rem;
      cursor: pointer;
    }

    .div-lang {
      display: flex;
      flex-direction: row;
      gap: 15px;
      padding: 18px 10px;
      align-items: center;

      .img-Flag {
        width: 32px;
        height: 22px;
        cursor: pointer;
      }
    }
  }
`;
const Nav_Mob = ({ onNav, open }) => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState("pt");

  const handleChangeLanguage = (selectedLanguage) => {
    setLanguage(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };
  const handleNav = (sectionId) => {
    onNav(sectionId);
  };
  return (
    <div>
      <Ul open={open}>
        <li>
          <a
            href="#who"
            onClick={() => handleNav("ref_Who")}
            className="a-mob-nav"
          >
            {t("quem")}
          </a>
        </li>
        <li>
          <a
            href="#obj"
            onClick={() => handleNav("ref_Obj")}
            className="a-mob-nav"
          >
            {t("obj")}
          </a>
        </li>
        <li>
          <a
            href="#swot"
            onClick={() => handleNav("ref_Swot")}
            className="a-mob-nav"
          >
            {t("swot")}
          </a>
        </li>
        <li>
          <a
            href="#skills"
            onClick={() => handleNav("ref_Skills")}
            className="a-mob-nav"
          >
            {t("hab")}
          </a>
        </li>
        <li>
          <a
            href="#proje"
            onClick={() => handleNav("ref_Proje")}
            className="a-mob-nav"
          >
            {t("proj")}
          </a>
        </li>
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
      </Ul>
      
    </div>
  );
};

export default Nav_Mob;
