import React from 'react';
import ProductsGrid from './ProductsGrid';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    container: {
        textAlign: "center",
    }
}));

const Store = () => {
    const classes = useStyles();
    return(
        <div>
            <div className={classes.container}>
                <h1>Store</h1>
                <p>This is the store page</p>
            </div>
            <ProductsGrid />
        </div>
    )
}

export default Store;