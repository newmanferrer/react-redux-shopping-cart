import { Dispatch } from 'redux';
import { ShoppingCartTypes } from '../../action-types/ShoppingCart';
import {
 IaddProductToCart,
 IremoveProductFromCart,
 IquantityAddOne,
 IquantityRemoveOne,
 IaddActiveProduct,
 IremoveActiveProduct,
 IclearCart
} from '../../interfaces/';

const addProductToCart = (productID: number) => {
 return (dispatch: Dispatch<IaddProductToCart>) => {
  dispatch({ type: ShoppingCartTypes.ADD_PRODUCT_TO_CART, payload: productID });
 };
};

const removeProductFromCart = (productID: number) => {
 return (dispatch: Dispatch<IremoveProductFromCart>) => {
  dispatch({ type: ShoppingCartTypes.REMOVE_PRODUCT_FROM_CART, payload: productID });
 };
};

const quantityAddOne = (productID: number) => {
 return (dispatch: Dispatch<IquantityAddOne>) => {
  dispatch({ type: ShoppingCartTypes.QUANTITY_ADD_ONE, payload: productID });
 };
};

const quantityRemoveOne = (productID: number) => {
 return (dispatch: Dispatch<IquantityRemoveOne>) => {
  dispatch({ type: ShoppingCartTypes.QUANTITY_REMOVE_ONE, payload: productID });
 };
};

const addActiveProduct = (productID: number) => {
 return (dispatch: Dispatch<IaddActiveProduct>) => {
  dispatch({ type: ShoppingCartTypes.ADD_ACTIVE_PRODUCT, payload: productID });
 };
};

const removeActiveProduct = (productID: number) => {
 return (dispatch: Dispatch<IremoveActiveProduct>) => {
  dispatch({ type: ShoppingCartTypes.REMOVE_ACTIVE_PRODUCT, payload: productID });
 };
};

const clearCart = () => {
 return (dispatch: Dispatch<IclearCart>) => {
  dispatch({ type: ShoppingCartTypes.CLEAR_CART });
 };
};

export const ShoppingCartActionCreators = {
 addProductToCart,
 removeProductFromCart,
 quantityAddOne,
 quantityRemoveOne,
 addActiveProduct,
 removeActiveProduct,
 clearCart
};
