import { put } from 'redux-saga';
import * as actions from '../actions';
import axios from '../../axios-orders';

export function* purchaseBurgerSaga(action) {
    try {
        yield put(actions.purchaseBurgerStart());
        const response = yield axios.post(`/orders.json?auth=${action.token}`, action.orderData)
        yield put(actions.purchaseBurgerSuccess(response.data.name, action.orderData));
    } catch (error) {
        yield put(actions.purchaseBurgerFail(error));
    }
}

export function* fetchOrdersSaga(action) {
    try {
        yield put(actions.fetchOrdersStart());
        const queryParams = `?auth=${action.token}&orderBy="userId"&equalTo="${action.userId}"`;
        const response = axios.get(`/orders.json${queryParams}`);
        const fetchedOrders = [];
        for (let key in response.data) {
            fetchedOrders.push({
                ...response.data[key],
                id: key
            });
        }
        yield put(actions.fetchOrdersSuccess(fetchedOrders));
    } catch (err) {
        yield put(actions.fetchOrdersFail(err));
    }
}