import React from 'react';

import { Container, Ident, Products } from './styles';

import MacaronsDiversos from '../../assets/macaronsDiversos.png';
import FatiaDeTorataGeladaDeCafeComChocolateAmargo from '../../assets/fatiaDeTorataGeladaDeCafeComChocolateAmargo.png';
import TortilleteDeLaranjaLimaComAmoras from '../../assets/tortilleteDeLaranjaLimaComAmoras.png';

const ProductsSection: React.FC = () => {
  return (
    <section>
      <Container>
        <h2>Produtos</h2>
        <Ident />

        <Products>
          <div>
            <img src={MacaronsDiversos} alt="Macrons Diversos" />
            <h5>Macarons Diversos 90g</h5>
            <p>R$9,00</p>
          </div>
          <div>
            <img
              src={TortilleteDeLaranjaLimaComAmoras}
              alt="Tortilette de Laranja"
            />
            <h5>Tortilette de Laranja Lima com Amoras</h5>
            <p>R$12,00</p>
          </div>
          <div>
            <img
              src={FatiaDeTorataGeladaDeCafeComChocolateAmargo}
              alt="Fatia de Torta Gelada"
            />
            <h5>Fatia de Torta Gelada de Café com Chocolate Amargo</h5>
            <p>R$14,00</p>
          </div>
          <div>
            <img src={MacaronsDiversos} alt="Macrons Diversos" />
            <h5>Macarons Diversos 90g</h5>
            <p>R$9,00</p>
          </div>
          <div>
            <img
              src={TortilleteDeLaranjaLimaComAmoras}
              alt="Tortilette de Laranja"
            />
            <h5>Tortilette de Laranja Lima com Amoras</h5>
            <p>R$12,00</p>
          </div>
          <div>
            <img
              src={FatiaDeTorataGeladaDeCafeComChocolateAmargo}
              alt="Fatia de Torta Gelada"
            />
            <h5>Fatia de Torta Gelada de Café com Chocolate Amargo</h5>
            <p>R$14,00</p>
          </div>
        </Products>

        <button type="button">Ver menos</button>
      </Container>
    </section>
  );
};

export default ProductsSection;
