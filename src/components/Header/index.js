import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingCart } from 'react-icons/md'

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg'

function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocketshoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>My cart</strong>
          <span>3 items</span>
        </div>
        <MdShoppingCart size={36} color="#DDD" />
      </Cart>
    </Container>
  );
}

export default Header;
