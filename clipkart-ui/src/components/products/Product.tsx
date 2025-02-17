import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Rating,
  Typography,
} from '@mui/material';
import { IProductCardProps, IProductsList } from '../../types/products/product';

function Product(product: IProductsList) {
  function handleAddToCart() {
    product.onAddToCartButtonClicked(product.productsData);
  }

  return (
    <>
      <Card sx={{ display: 'flex', flexDirection: 'column', width: 300 }}>
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
        <CardActionArea>
          <Button onClick={handleAddToCart} size="small">
            Add to cart
          </Button>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Product;
