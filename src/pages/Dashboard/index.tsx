import React, { useCallback } from 'react';
import { MdLocationOn } from 'react-icons/md';

import HeaderComponents from '../../components/Header';
import SectionBannerWithTitle from '../../components/SectionBannerWithTitle';
import CompanyHistorySection from '../../components/CompanyHistorySection';
import ProductsSection from '../../components/ProductsSection';
import FormContact from '../../components/FormContactAndCompanyLocation';

import locationCompanyIMG from '../../assets/location.png';
import logoFooter from '../../assets/logoFooter.svg';
import backToTheTop from '../../assets/icons/backToTheTop.svg';
import phoneSVG from '../../assets/icons/phone.svg';
import locationSVG from '../../assets/icons/location.svg';
import mailSVG from '../../assets/icons/mail.svg';

import {
  SectionFormContactAndCompanyLocation,
  CompanyLocation,
  Ident,
  ContactFooter,
  Footer,
  IdentCopy,
  BackToTheTop,
} from './styles';

const Dashboard: React.FC = () => {
  const handleBackToTheTop = useCallback(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeaderComponents />

      <SectionBannerWithTitle />

      <CompanyHistorySection />

      <ProductsSection />

      <SectionFormContactAndCompanyLocation>
        <FormContact />
        <CompanyLocation>
          <h3>Você também pode nos fazer uma visita.</h3>
          <img src={locationCompanyIMG} alt="Localização da empresa" />
          <div>
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

      <Footer>
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
            <Ident />
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
