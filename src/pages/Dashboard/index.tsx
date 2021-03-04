import React from 'react';

import HeaderComponents from '../../components/Header';
import SectionBannerWithTitle from '../../components/SectionBannerWithTitle';
import CompanyHistorySection from '../../components/CompanyHistorySection';
import ProductsSection from '../../components/ProductsSection';
import FormContact from '../../components/FormContact';

const Dashboard: React.FC = () => {
  return (
    <>
      <HeaderComponents />

      <SectionBannerWithTitle />

      <CompanyHistorySection />

      <ProductsSection />

      <section>
        <FormContact />
      </section>
    </>
  );
};

export default Dashboard;
