import { call, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';

import { handleAddToCartSuccess } from './actions';

function* addToCart(action) {
  const response = yield call(api.get, `/products/${action.id}`);

  yield put(handleAddToCartSuccess(response.data));
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
