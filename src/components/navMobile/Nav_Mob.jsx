import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import svg_flag from "../../assets/flags";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  li {
    padding: 18px 10px;
  }

  @media (max-width: 1023px) {
    flex-flow: column nowrap;
    background-color: ${({ theme }) => theme.cardBg || '#8e59d7'};
    z-index: 10;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out, background-color 0.3s ease;
    overflow-y: auto;

    li {
      color: ${({ theme }) => theme.text || '#fff'};
    }

    .a-mob-nav {
      text-decoration: none;
      color: ${({ theme }) => theme.text || '#fff'};
      font-size: 1.25rem;
      cursor: pointer;
    }

    .div-darkmode-mob {
      padding: 18px 10px;
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

const ThemeToggleButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text || '#fff'};
  color: ${({ theme }) => theme.text || '#fff'};
  padding: 8px 16px;
  border-radius: 20px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

const Nav_Mob = ({ onNav, open, theme, toggleTheme, onChangeLanguage }) => {
  const { t, i18n } = useTranslation();
  const isLight = theme === "light";

  const handleChangeLanguage = (lang) => {
    if (typeof onChangeLanguage === "function") {
      onChangeLanguage(lang);
    } else {
      i18n.changeLanguage(lang);
    }
  };

  const handleNav = (sectionId) => {
    onNav(sectionId);
  };

  return (
    <div>
      <Ul open={open}>
        <li>
          <a href="#who" onClick={() => handleNav("ref_Who")} className="a-mob-nav">
            {t("quem")}
          </a>
        </li>
        <li>
          <a href="#obj" onClick={() => handleNav("ref_Obj")} className="a-mob-nav">
            {t("obj")}
          </a>
        </li>
        <li>
          <a href="#swot" onClick={() => handleNav("ref_Swot")} className="a-mob-nav">
            {t("swot")}
          </a>
        </li>
        <li>
          <a href="#skills" onClick={() => handleNav("ref_Skills")} className="a-mob-nav">
            {t("hab")}
          </a>
        </li>
        <li>
          <a href="#proje" onClick={() => handleNav("ref_Proje")} className="a-mob-nav">
            {t("proj")}
          </a>
        </li>

        {/* Botão para mudar Tema */}
        <li className="div-darkmode-mob">
          <ThemeToggleButton type="button" onClick={toggleTheme}>
            {isLight ? `🌙 ${t("darkMode")}` : `☀️ ${t("lightMode")}`}
          </ThemeToggleButton>
        </li>

        {/* Seletor de Idioma */}
        <div className="div-lang">
          <img
            src={svg_flag.br}
            className="img-Flag"
            onClick={() => handleChangeLanguage("pt")}
            alt="Português"
          />
          <img
            src={svg_flag.uk}
            className="img-Flag"
            onClick={() => handleChangeLanguage("en")}
            alt="English"
          />
        </div>
      </Ul>
    </div>
  );
};

export default Nav_Mob;