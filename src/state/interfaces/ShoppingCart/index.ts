import { Dispatch } from 'redux';
import { ShoppingCartTypes } from '../../action-types';

export interface IaddProductToCart {
 type: ShoppingCartTypes.ADD_PRODUCT_TO_CART;
 payload: number;
}

export interface IremoveProductFromCart {
 type: ShoppingCartTypes.REMOVE_PRODUCT_FROM_CART;
 payload: number;
}

export interface IquantityAddOne {
 type: ShoppingCartTypes.QUANTITY_ADD_ONE;
 payload: number;
}

export interface IquantityRemoveOne {
 type: ShoppingCartTypes.QUANTITY_REMOVE_ONE;
 payload: number;
}

export interface IaddActiveProduct {
 type: ShoppingCartTypes.ADD_ACTIVE_PRODUCT;
 payload: number;
}

export interface IremoveActiveProduct {
 type: ShoppingCartTypes.REMOVE_ACTIVE_PRODUCT;
 payload: number;
}

export interface IclearCart {
 type: ShoppingCartTypes.CLEAR_CART;
}

export type TShoppingCartAction =
 | IaddProductToCart
 | IremoveProductFromCart
 | IquantityAddOne
 | IquantityRemoveOne
 | IaddActiveProduct
 | IremoveActiveProduct
 | IclearCart;

export interface IProduct {
 id: number;
 name: string;
 price: number;
 quantity: number;
}

export interface IShoppingCart {
 products: IProduct[];
 cart: IProduct[] | [];
 activeProduct: IProduct | {};
}

export interface IProductItemProps {
 product: IProduct;
 addProductToCart: (productID: number) => (dispatch: Dispatch<IaddProductToCart>) => void;
 addActiveProduct: (productID: number) => (dispatch: Dispatch<IaddActiveProduct>) => void;
}

export interface ICartItemProps {
 product: IProduct;
 products: IProduct[];
 quantityAddOne: (productID: number) => (dispatch: Dispatch<IquantityAddOne>) => void;
 quantityRemoveOne: (productID: number) => (dispatch: Dispatch<IquantityRemoveOne>) => void;
 removeProductFromCart: (productID: number) => (dispatch: Dispatch<IremoveProductFromCart>) => void;
}

export interface IActiveProductItemProps {
 activeProduct: any;
 products: IProduct[];
 removeActiveProduct: (productID: number) => (dispatch: Dispatch<IremoveActiveProduct>) => void;
}
