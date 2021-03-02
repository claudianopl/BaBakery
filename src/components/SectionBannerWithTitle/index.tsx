import React from 'react';

import { SectionBanner } from './styles';

const SectionBannerWithTitle: React.FC = () => {
  return (
    <SectionBanner>
      <div>
        <h1>Sabor em Cada pedaço.</h1>
        <button className="btn" type="button">
          Nossos produtos
        </button>
      </div>
    </SectionBanner>
  );
};

export default SectionBannerWithTitle;
