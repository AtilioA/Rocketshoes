import React, { Component } from 'react';
import { connect } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map((product) => ({
      ...product,
      formattedPrice: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddToCart = (product) => {
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
  };

  render() {
    const { products } = this.state;
    console.log(products);

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img
              src={require('../../assets/images/sneakers/Air Jordan.png')}
              alt={product.title}
            />

            <strong>{product.title}</strong>
            <span>{product.formattedPrice}</span>

            <button type="button" onClick={() => this.handleAddToCart(product)}>
              <div>
                <MdAddShoppingCart size={16} color="#FFF" /> 3
              </div>
              <span>Add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

export default connect()(Home);
