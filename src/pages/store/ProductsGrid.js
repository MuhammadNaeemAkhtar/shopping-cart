import React, { useContext } from 'react';
import { ProductsContext } from '../../context/ProductsContext';
import {makeStyles} from '@material-ui/core'
import ProductItem from './ProductItem';

const useStyles = makeStyles(() => ({
    flexContainer: {
        display: "flex",
        flexFlow: "wrap",
        justifyContent: "space-evenly",
    }
}));

const ProductsGrid = () => {
    const classes = useStyles();
    const { products } = useContext(ProductsContext);

    //console.log( products );

    return(
        <div className={classes.flexContainer}>
            {products.length > 0 ? (
                products.map( (product) => (
                    <ProductItem key={product.id}  product={product} />
                ))
            ): (
                <div>
                    404 Not Found
                </div>
            )}
        </div>
    )
}

export default ProductsGrid;