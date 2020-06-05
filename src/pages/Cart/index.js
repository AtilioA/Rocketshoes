import React from 'react';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'

import { Container, ProductTable, Total } from './styles';

function Cart() {
  return (<Container>
    <ProductTable>
      <thead>
        <tr>
          <th />
          <th>PRODUCT</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
          <th />
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={require("../../assets/images/sneakers/Air Jordan.png")} alt="Air Jordan Sneakers" />
          </td>

          <td>
            <strong>Nike Air Jordan 1 Retro Satin</strong>
            <span>R$999,90</span>
          </td>

          <td>
            <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#7159c1" />
              </button>

              <input type="number" readOnly value={3} />

              <button type="button">
                <MdAddCircleOutline size={20} color="#7159c1" />
              </button>
            </div>
          </td>

          <td>
            <strong>R$2999,70</strong>
          </td>

          <td>
            <button type="button">
              <MdDelete size={20} color="#7159c1" />
            </button>
          </td>

        </tr>
      </tbody>
    </ProductTable>


    <footer>
      <button type="button">Go to checkout</button>

      <Total>
        <span>TOTAL</span>
        <strong>R$2999,70</strong>
      </Total>
    </footer>
  </Container>);
}

export default Cart;
