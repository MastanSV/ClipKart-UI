import { Box, Card, CardContent,  Rating,  Typography } from "@mui/material";

interface ProductCardProps
{
    name : string,
    description : string,
    price : string,
    rating : number,
    reviews : string
}

function Product(product : ProductCardProps)
{
    return <>
    <Card sx={{width:275, height:250, margin:1}}>
        <CardContent>
            {/* <CardHeader style={{fontWeight:12}}>iPhone 12 mini</CardHeader> */}
            {/* <Typography  sx={{color:'rebeccapurple', fontSize: 25}}>iPhone12 mini</Typography> */}
            <Typography variant="h6" >{product.name}</Typography>
            <Typography variant="body2">
                {product.description}
            </Typography>
            <Typography variant="h6" color="primary">{product.price} INR</Typography>
            <Box display="flex">
                <Rating value={product.rating} precision={0.5} readOnly/>
                <Typography variant="body2" sx={{ml:1, mt:0.25}}>{product.reviews} Reviews</Typography>
            </Box>
        </CardContent>
        
    </Card>
    </>;
}


export default Product;