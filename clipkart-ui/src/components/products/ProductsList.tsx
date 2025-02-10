import Product from "./Product";
import productsData from '../../dummy/data/products.json'
import { Box } from "@mui/material";

function ProductsList()
{
    return <>
        <Box sx={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
            {productsData.map((product, index) => (
                <Product key={index} {...product} />
            ))}
        </Box>
    </>
}

export default ProductsList;