import './footer.css'
import Socials from "../../assets/socials";
import styled from 'styled-components';
import { useTranslation } from "react-i18next";

const StyledInsta = styled(Socials.a)`
  fill: ${(props) => props.theme.svg};
  transition: fill 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
`
const StyledLinkedin = styled(Socials.b)`
  fill: ${(props) => props.theme.svg};
  transition: fill 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
`


const Footer = () => {

  const { t } = useTranslation()
  return (
    <div>
      <footer className='footer'>
        <section className='section-left-footer'>
          <h5 className='hFooter'>César Morsoleto Batista</h5>
          <p>{t("email")}</p>
          <p>{t("phone")} <a href="https://api.whatsapp.com/send/?phone=961615522&text&type=phone_number&app_absent=0" target='_blank' noopener="true" noreferrer="true" className='a-phone'> +55 (11) 96161-5522</a></p>

        </section>
        <section className='section-right-footer'>
          <div className='div-socials'>
            <a href="https://www.linkedin.com/in/cesar-morsoleto-batista/" target='_blank' rel="noopener noreferrer" className='a-Footer'>
              <StyledLinkedin alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/czar_batista/" target='_blank' rel="noopener noreferrer" className='a-Footer'>
              <StyledInsta alt="Instagram" />
            </a>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer
