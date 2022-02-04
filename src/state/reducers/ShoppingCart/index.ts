import { ShoppingCartTypes } from '../../action-types/';
import { IProduct, IShoppingCart, TShoppingCartAction } from '../../interfaces/ShoppingCart';

const initialState: IShoppingCart = {
 products: [
  { id: 1, name: 'Pants', price: 100, quantity: 5 },
  { id: 2, name: 'Dress', price: 200, quantity: 5 },
  { id: 3, name: 'Glasses', price: 300, quantity: 5 },
  { id: 4, name: 'Jacket', price: 400, quantity: 5 },
  { id: 5, name: 'Hat', price: 500, quantity: 5 },
  { id: 6, name: 'Shoes', price: 600, quantity: 5 }
 ],
 cart: [],
 activeProduct: {}
};

const shoppingCartReducer = (state = initialState, action: TShoppingCartAction) => {
 switch (action.type) {
  case ShoppingCartTypes.ADD_PRODUCT_TO_CART: {
   const productID = action.payload;
   const productToCart = state.products.find((product: IProduct) => product.id === productID);
   const productExistInCart = state.cart.find((product: IProduct) => product.id === productID);

   return productExistInCart
    ? productToCart && productToCart.quantity > 0
      ? {
         ...state,
         products: state.products.map((product: IProduct) =>
          product.id === productID
           ? product.quantity > 0 && { ...product, quantity: product.quantity - 1 }
           : product
         ),
         cart: state.cart.map((product: IProduct) =>
          product.id === productToCart?.id
           ? { ...product, quantity: product.quantity + 1 }
           : product
         )
        }
      : { ...state }
    : productToCart && productToCart.quantity > 0
    ? {
       ...state,
       products: state.products.map((product: IProduct) =>
        product.id === productID ? { ...product, quantity: product.quantity - 1 } : product
       ),
       cart: [...state.cart, { ...productToCart, quantity: 1 }]
      }
    : { ...state };
  }

  case ShoppingCartTypes.REMOVE_PRODUCT_FROM_CART: {
   const productID = action.payload;
   const productToRemove = state.cart.find((product: IProduct) => product.id === productID);

   return productToRemove
    ? {
       ...state,
       products: state.products.map((product: IProduct) =>
        product.id === productID
         ? { ...product, quantity: product.quantity + productToRemove.quantity }
         : product
       ),
       cart: state.cart.filter((product: IProduct) => product.id !== productID)
      }
    : { ...state };
  }

  case ShoppingCartTypes.QUANTITY_ADD_ONE: {
   const productID = action.payload;
   const productToCart = state.products.find((product: IProduct) => product.id === productID);

   return productToCart && productToCart.quantity > 0
    ? {
       ...state,
       products: state.products.map((product: IProduct) =>
        product.id === productID ? { ...product, quantity: product.quantity - 1 } : product
       ),
       cart: state.cart.map((product: IProduct) =>
        product.id === productID ? { ...product, quantity: product.quantity + 1 } : product
       )
      }
    : { ...state };
  }

  case ShoppingCartTypes.QUANTITY_REMOVE_ONE: {
   const productID = action.payload;
   const productToRemove = state.cart.find((product: IProduct) => product.id === productID);

   return productToRemove && productToRemove.quantity > 1
    ? {
       ...state,
       products: state.products.map((product: IProduct) =>
        product.id === productID ? { ...product, quantity: product.quantity + 1 } : product
       ),
       cart: state.cart.map((product: IProduct) =>
        product.id === productID ? { ...product, quantity: product.quantity - 1 } : product
       )
      }
    : {
       ...state,
       products: state.products.map((product: IProduct) =>
        product.id === productID ? { ...product, quantity: product.quantity + 1 } : product
       ),
       cart: state.cart.filter((product: IProduct) => product.id !== productID)
      };
  }

  case ShoppingCartTypes.ADD_ACTIVE_PRODUCT: {
   const productID = action.payload;
   const productToAdtiveProduct = state.products.find(
    (product: IProduct) => product.id === productID
   );

   return {
    ...state,
    activeProduct: { ...productToAdtiveProduct }
   };
  }

  case ShoppingCartTypes.REMOVE_ACTIVE_PRODUCT: {
   return {
    ...state,
    activeProduct: {}
   };
  }

  case ShoppingCartTypes.CLEAR_CART: {
   const newProducts = state.products.map((productInProducts: IProduct) => {
    const productInCart = state.cart.find(
     (productInCart: IProduct) => productInProducts.id === productInCart.id
    );

    return productInCart
     ? {
        ...productInProducts,
        quantity: productInProducts.quantity + productInCart.quantity
       }
     : productInProducts;
   });

   return {
    ...state,
    products: newProducts,
    cart: []
   };
  }

  default:
   return state;
 }
};

export default shoppingCartReducer;
