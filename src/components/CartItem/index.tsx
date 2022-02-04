import { ICartItemProps, IProduct } from '../../state/interfaces/ShoppingCart';
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';

export const CartItem: React.FC<ICartItemProps> = ({
 product,
 quantityAddOne,
 quantityRemoveOne,
 removeProductFromCart,
 products
}): JSX.Element => {
 const { id, name, price, quantity } = product;
 const productInProducts = products.find((product: IProduct) => product.id === id);

 return (
  <Card
   style={{
    width: '10rem',
    padding: '0.5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid blue',
    boxShadow: '2px 2px 2px blue'
   }}>
   <CardContent
    style={{
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
    }}>
    <Typography component="p" style={{ fontSize: '1.6rem', fontWeight: 'bold', color: 'blue' }}>
     {name}
    </Typography>
    <Typography component="p" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'blue' }}>
     ${price}.00 x {quantity}
    </Typography>
    <Typography
     component="p"
     style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.2rem', color: 'blue' }}>
     ${price * quantity}.00
    </Typography>
    <Typography component="p" style={{ fontSize: '1rem', fontWeight: 'bold', color: 'blue' }}>
     ID: {id}
    </Typography>
   </CardContent>

   <CardActions
    style={{
     width: '100%',
     padding: '0',
     marginBottom: '0.5rem',
     display: 'flex',
     flexDirection: 'column',
     justifyContent: 'center',
     alignItems: 'center'
    }}>
    <Button
     color="primary"
     variant="contained"
     size="small"
     style={{ marginBottom: '0.5rem' }}
     disabled={productInProducts && productInProducts.quantity <= 0 ? true : false}
     onClick={() => quantityAddOne(id)}>
     Add one
    </Button>

    <Button
     color="primary"
     variant="outlined"
     size="small"
     style={{ marginBottom: '0.5rem' }}
     onClick={() => quantityRemoveOne(id)}>
     Remove one
    </Button>

    <Button
     color="primary"
     variant="outlined"
     size="small"
     onClick={() => removeProductFromCart(id)}>
     Remove all
    </Button>
   </CardActions>
  </Card>
 );
};
