import { useDispatch, useSelector } from 'react-redux';
import { TState } from '../../state/reducers';
import { IProduct, IShoppingCart } from '../../state/interfaces/ShoppingCart';
import { ShoppingCartActionCreators } from '../../state/action-creators/';
import { bindActionCreators } from 'redux';
import { ProductItem, CartItem, ActiveProductItem } from '../';
import { Container, Typography, Button } from '@material-ui/core';

export const ShoppingCart: React.FC<{}> = (): JSX.Element => {
 const { products, cart, activeProduct }: IShoppingCart = useSelector(
  (state: TState) => state.shoppingCart
 );
 const dispatch = useDispatch();

 const {
  addProductToCart,
  removeProductFromCart,
  quantityAddOne,
  quantityRemoveOne,
  addActiveProduct,
  removeActiveProduct,
  clearCart
 } = bindActionCreators(ShoppingCartActionCreators, dispatch);

 return (
  <Container maxWidth="lg" style={{ padding: '1rem' }}>
   <Typography
    variant="h2"
    component="h1"
    align="center"
    style={{ marginBottom: '2rem', color: 'blue', fontWeight: 'bold' }}>
    Redux Shopping Cart
   </Typography>

   <Typography
    variant="h4"
    component="h2"
    align="center"
    style={{ marginBottom: '1rem', color: 'blue' }}>
    PRODUCTS
   </Typography>
   <Container
    style={{
     width: '100%',
     padding: '1rem',
     marginBottom: '2rem',
     display: 'grid',
     gap: '2rem',
     gridAutoRows: '18rem',
     gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr)',
     justifyContent: 'center',
     alignItems: 'center',
     border: '3px solid blue',
     borderRadius: '5px',
     backgroundColor: 'skyblue'
    }}>
    {products.map((product: IProduct) => (
     <ProductItem
      key={product.id}
      product={product}
      addProductToCart={addProductToCart}
      addActiveProduct={addActiveProduct}
     />
    ))}
   </Container>

   {cart && cart.length > 0 && (
    <>
     <Typography
      variant="h4"
      component="h2"
      align="center"
      style={{ marginBottom: '0.5rem', color: 'blue' }}>
      MY CART
     </Typography>
     <Button
      color="primary"
      variant="contained"
      size="small"
      style={{ marginBottom: '0.5rem' }}
      onClick={() => clearCart()}>
      Clear Cart
     </Button>

     <Container
      style={{
       width: '100%',
       padding: '1rem',
       marginBottom: '2rem',
       display: 'grid',
       gap: '2rem',
       gridAutoRows: '18rem',
       gridTemplateColumns: 'repeat(auto-fill, minmax(10rem, 1fr)',
       justifyContent: 'center',
       alignItems: 'center',
       border: '3px solid blue',
       borderRadius: '5px',
       backgroundColor: 'skyblue'
      }}>
      {cart.map((product: IProduct) => (
       <CartItem
        key={product.id}
        product={product}
        products={products}
        quantityAddOne={quantityAddOne}
        quantityRemoveOne={quantityRemoveOne}
        removeProductFromCart={removeProductFromCart}
       />
      ))}
     </Container>
    </>
   )}

   {activeProduct && Object.keys(activeProduct).length > 0 && (
    <>
     <Typography
      variant="h4"
      component="h2"
      align="center"
      style={{ marginBottom: '1rem', color: 'blue' }}>
      SHOW PRODUCT
     </Typography>

     <Container
      style={{
       width: '100%',
       padding: '1rem',
       marginBottom: '2rem',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',
       border: '3px solid blue',
       borderRadius: '5px',
       backgroundColor: 'skyblue'
      }}>
      <ActiveProductItem
       activeProduct={activeProduct}
       products={products}
       removeActiveProduct={removeActiveProduct}
      />
     </Container>
    </>
   )}
  </Container>
 );
};
