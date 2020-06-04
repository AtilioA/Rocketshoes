import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md'
import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img src={require("../../assets/images/sneakers/Air Jordan.png")} alt="Air Jordan Sneakers" />
        <strong>Nike Air Jordan 1 Retro Satin</strong>
        <span>R$999,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={require("../../assets/images/sneakers/Air Jordan.png")} alt="Air Jordan Sneakers" />
        <strong>Nike Air Jordan 1 Retro Satin</strong>
        <span>R$999,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={require("../../assets/images/sneakers/Air Jordan.png")} alt="Air Jordan Sneakers" />
        <strong>Nike Air Jordan 1 Retro Satin</strong>
        <span>R$999,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={require("../../assets/images/sneakers/Air Jordan.png")} alt="Air Jordan Sneakers" />
        <strong>Nike Air Jordan 1 Retro Satin</strong>
        <span>R$999,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={require("../../assets/images/sneakers/Air Jordan.png")} alt="Air Jordan Sneakers" />
        <strong>Nike Air Jordan 1 Retro Satin</strong>
        <span>R$999,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

      <li>
        <img src={require("../../assets/images/sneakers/Air Jordan.png")} alt="Air Jordan Sneakers" />
        <strong>Nike Air Jordan 1 Retro Satin</strong>
        <span>R$999,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#FFF" /> 3
          </div>
          <span>Add to cart</span>
        </button>
      </li>

    </ProductList>
  );
}

export default Home;
