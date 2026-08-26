import './footer.css'
import socials from "../../assets/socials";
import { useTranslation } from "react-i18next";

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
            <a href="https://www.linkedin.com/in/cesar-morsoleto-batista-3a5b4b1a9/" target='_blank' rel="noopener noreferrer">
              <img src={socials.b} alt="LinkedIn" />
            </a>
            <a href="https://www.instagram.com/czar_batista/" target='_blank' rel="noopener noreferrer">
              <img className='img-insta' src={socials.a} alt="Instagram" />
            </a>
          </div>
        </section>
      </footer>
    </div>
  )
}

export default Footer
