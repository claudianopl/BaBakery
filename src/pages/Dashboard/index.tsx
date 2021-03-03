import React from 'react';

import HeaderComponents from '../../components/Header';
import SectionBannerWithTitle from '../../components/SectionBannerWithTitle';
import CompanyHistorySection from '../../components/CompanyHistorySection';

const Dashboard: React.FC = () => {
  return (
    <>
      <HeaderComponents />

      <SectionBannerWithTitle />

      <CompanyHistorySection />
    </>
  );
};

export default Dashboard;
