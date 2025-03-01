import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Rating,
  Typography,
} from '@mui/material';
import { IProductProps } from '../../types/products/product';
import { useState } from 'react';

function Product({ product, onAddToCartButtonClicked }: IProductProps) {
  const [cartText, setCartText] = useState<string>('Add to cart');
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  function handleAddToCartButtonClicked() {
    if (isAddedToCart) {
      return;
    }
    onAddToCartButtonClicked(product);
    setCartText('Go to cart');
    setIsAddedToCart(true);
  }
  return (
    <>
      <Card
        sx={{
          flex: '1 1 calc(20% - 10px)',
          flexDirection: 'column',
          minWidth: '20%',
        }}
      >
        <CardContent sx={{ flexGrow: 1 }}>
          {/* <CardHeader style={{fontWeight:12}}>iPhone 12 mini</CardHeader> */}
          {/* <Typography  sx={{color:'rebeccapurple', fontSize: 25}}>iPhone12 mini</Typography> */}
          <Typography variant="h6">{product.name}</Typography>
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="h6" color="primary">
            {product.price} INR
          </Typography>
          <Box display="flex">
            <Rating value={product.rating} precision={0.5} readOnly />
            <Typography variant="body2" sx={{ ml: 1, mt: 0.25 }}>
              {product.reviews} Reviews
            </Typography>
          </Box>
        </CardContent>
        <CardActions onClick={handleAddToCartButtonClicked} sx={{ mt: -2 }}>
          <Button size="small" onClick={handleAddToCartButtonClicked}>
            {cartText}
          </Button>
        </CardActions>
      </Card>
    </>
  );
}

export default Product;
