import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as CartActions from '../../store/modules/cart/actions';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import Cart from '../Cart';

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
    const { handleAddToCart } = this.props;

    handleAddToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    console.tron.log(products);

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
                <MdAddShoppingCart size={16} color="#FFF" />{' '}
                {amount[product.id]} || 0
              </div>
              <span>Add to cart</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

export default connect(null, mapStateToProps, mapDispatchToProps)(Home);
