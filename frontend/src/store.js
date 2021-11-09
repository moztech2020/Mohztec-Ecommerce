import { createStore, compose, applyMiddleware,  combineReducers   } from 'redux';
import thunk from 'redux-thunk';
import { userDetailsReducer,
   userRegisterReducer, 
   userSigninReducer, 
    userListReducer, 
    userTopSellerListReducer,
    userDeleteReducer,
    userUpdateReducer,
   userUpdateProfileReducer,
   } from './reducers/userReducers';
import { cartReducer } from './reducers/cartReducers';
import {
  productCategoryListReducer,
  productCreateReducer,
    productDeleteReducer,
    productDetailsReducer,
    productListReducer,
    productReviewCreateReducer,
    productUpdateReducer,
  } from './reducers/productReducers';
import { orderCreateReducer, orderDeleteReducer, orderDeliverReducer, orderSummaryReducer, orderDetailsReducer, orderListReducer, orderMineListReducer, orderPayReducer } from './reducers/orderReducers';

  const initialState = {
    userSignin: {
      userInfo: localStorage.getItem('userInfo')
        ? JSON.parse(localStorage.getItem('userInfo'))
        : null,
    },
    cart: {
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
        shippingAddress: localStorage.getItem('shippingAddress')
        ? JSON.parse(localStorage.getItem('shippingAddress'))
        : {},
        paymentMethod: 'Flutterwave',
    },
  };
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userSignin: userSigninReducer,
  userRegister: userRegisterReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderMineList: orderMineListReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  productCreate: productCreateReducer,
  productReviewCreate: productReviewCreateReducer,
  orderSummary: orderSummaryReducer,
  productUpdate: productUpdateReducer,
  productDelete: productDeleteReducer,
  orderPay: orderPayReducer,
 
  orderList: orderListReducer,
  orderDelete: orderDeleteReducer,
  orderDeliver: orderDeliverReducer,
  userList: userListReducer,
  
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,
  userTopSellersList: userTopSellerListReducer,
  productCategoryList: productCategoryListReducer,

 
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;