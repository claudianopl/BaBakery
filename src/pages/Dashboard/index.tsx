import React, { useCallback, useEffect } from 'react';
import { MdLocationOn } from 'react-icons/md';

import Aos from 'aos';
import 'aos/dist/aos.css';
import HeaderComponents from '../../components/Header';
import SectionBannerWithTitle from '../../components/SectionBannerWithTitle';
import CompanyHistorySection from '../../components/CompanyHistorySection';
import ProductsSection from '../../components/ProductsSection';
import FormContact from '../../components/FormContact';

import locationCompanyIMG from '../../assets/location.png';
import logoFooter from '../../assets/logoFooter.svg';
import backToTheTop from '../../assets/icons/backToTheTop.svg';
import phoneSVG from '../../assets/icons/phone.svg';
import locationSVG from '../../assets/icons/location.svg';
import mailSVG from '../../assets/icons/mail.svg';

import {
  SectionFormContactAndCompanyLocation,
  CompanyLocation,
  ContactFooter,
  Footer,
  IdentCopy,
  BackToTheTop,
} from './styles';

const Dashboard: React.FC = () => {
  const handleBackToTheTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <HeaderComponents />

      <SectionBannerWithTitle />

      <CompanyHistorySection />

      <ProductsSection />

      <SectionFormContactAndCompanyLocation>
        <FormContact />
        <CompanyLocation data-aos="fade">
          <h3 data-aos="fade-right" data-aos-delay="100">
            Você também pode nos fazer uma visita.
          </h3>
          <img
            data-aos="fade-right"
            data-aos-delay="200"
            src={locationCompanyIMG}
            alt="Localização da empresa"
          />
          <div data-aos="fade-right" data-aos-delay="300">
            <MdLocationOn />
            <p>
              R. Hermílio Arantes, 1040 - Vila dos Coqueiros. Graças, Recife -
              PE.
            </p>
          </div>
          <button type="button" className="fourth">
            Traçar rota
          </button>
        </CompanyLocation>
      </SectionFormContactAndCompanyLocation>

      <Footer data-aos="fade">
        <ContactFooter>
          <img src={logoFooter} alt="Be Bakery" />
          <div>
            <article>
              <img src={phoneSVG} alt="Telefone" />
              <p>+55 (87) 3312.4057</p>
            </article>
            <article>
              <img src={mailSVG} alt="E-mail" />
              <p>contato@babakery.com.br</p>
            </article>
            <div />
            <article>
              <img src={locationSVG} alt="Localização" />
              <p>
                R. Hermílio Arantes, 1040 - Vila dos Coqueiros. Graças, Recife -
                PE.
              </p>
            </article>
          </div>
          <BackToTheTop>
            <button type="button" onClick={handleBackToTheTop}>
              <img src={backToTheTop} alt="Voltar ao topo" />
            </button>
          </BackToTheTop>
        </ContactFooter>
        <IdentCopy />
        <p>Ba Bakery - Copyright 2020 &copy; Todos os direitos reservados.</p>
      </Footer>
    </>
  );
};

export default Dashboard;
