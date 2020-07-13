import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        textAlign: "center",
    }
}))

const ProductDetails = () => {
    const classes = useStyles();
    let { slug } = useParams();
    const { products } = useContext(ProductsContext);
    const product = products.find((p) => p.name === slug );

    if (!product) return <p>Product not found</p>;
    
    console.log(product);

    return(
        <div className={classes.container}>
            <h1>{ product.name }</h1>
            <img src={ product.imageURL} alt={product.name} />
        </div>
    )
}

export default ProductDetails;