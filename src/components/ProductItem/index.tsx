import { IProductItemProps } from '../../state/interfaces';
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';

export const ProductItem: React.FC<IProductItemProps> = ({
 product,
 addProductToCart,
 addActiveProduct
}): JSX.Element => {
 const { id, name, price, quantity } = product;

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
    <Typography component="p" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'blue' }}>
     ${price}.00
    </Typography>
    <Typography
     component="p"
     style={
      quantity > 0
       ? { fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'blue' }
       : { fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: 'red' }
     }>
     quantity: {quantity}
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
     disabled={quantity <= 0 && true}
     onClick={() => addProductToCart(id)}>
     Add to Cart
    </Button>

    <Button color="primary" variant="contained" size="small" onClick={() => addActiveProduct(id)}>
     Show Product
    </Button>
   </CardActions>
  </Card>
 );
};
