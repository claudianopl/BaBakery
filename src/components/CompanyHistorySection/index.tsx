import React from 'react';

import { Container } from './styles';

import HistoryImg from '../../assets/history.png';

const CompanyHistorySection: React.FC = () => {
  return (
    <section>
      <Container>
        <div>
          <img src={HistoryImg} alt="Company" />
        </div>
        <article>
          <h2>História da Ba Bakery</h2>
          <div />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna.
          </p>
        </article>
      </Container>
    </section>
  );
};

export default CompanyHistorySection;
