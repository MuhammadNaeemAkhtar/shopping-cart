import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles( () => ({
    card: {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        width: "300px",
        margin: "10px",
        borderRadius: "10px",
        textAlign: "center",
    
        "&:hover": {
          cursor: "pointer",
        },
    },
    price: {
        fontSize: "22px",
    },
    container: {
    display: "flex",
    flexFlow: "rwo wrap",
    paddingLeft: "10px",
    },
    media: {
        width: "300px",
        height: "300px",
    },
    cartButton: {
        padding: "12px",
        color: "white",
        backgroundColor: "#000",
        textAlign: "center",
        cursor: "pointer",
        width: "100%",
        fontSize: "18px",
        border: "solid 2px",
        "&:hover": {
            color: "#000",
            backgroundColor: "white",
        }
    }
}));

const ProductItem = ({ product }) => {
    const classes = useStyles();  
    const { cart, addToCart } = useContext(CartContext); 
    
    function handleAddToCart(e) {
        e.stopPropagation();
        addToCart( product );
    }

    return(
        <div className={classes.card}>
            <Link to={`/products/${product.name}`}>
                <img src={product.imageURL} alt={product.name} className={classes.media} />
                <h3>{product.name}</h3>
                <p className={classes.price}>{product.price}$</p>
            </Link>
            
            <p>
                <button className={classes.cartButton} onClick={ handleAddToCart }>Add to Cart</button>    
            </p>
        </div>
    )
}

export default ProductItem;
