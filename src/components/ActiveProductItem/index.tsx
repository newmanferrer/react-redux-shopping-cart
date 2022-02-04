import { IActiveProductItemProps, IProduct } from '../../state/interfaces';
import { Card, CardContent, CardActions, Button, Typography } from '@material-ui/core';

export const ActiveProductItem: React.FC<IActiveProductItemProps> = ({
 activeProduct,
 products,
 removeActiveProduct
}): JSX.Element => {
 const { id, name, price, quantity } = activeProduct;
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
    <Typography component="p" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'blue' }}>
     ${price}.00
    </Typography>
    <Typography
     component="p"
     style={
      productInProducts && productInProducts.quantity > 0
       ? { fontSize: '1.2rem', fontWeight: 'bold', color: 'blue' }
       : { fontSize: '1.2rem', fontWeight: 'bold', color: 'red' }
     }>
     quantity: {productInProducts ? productInProducts.quantity : quantity}
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
    <Button color="primary" variant="outlined" size="small" onClick={() => removeActiveProduct(id)}>
     Close
    </Button>
   </CardActions>
  </Card>
 );
};
