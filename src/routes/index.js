import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Store from '../pages/store'
import ProductDetails from '../components/ProductDetails';
import { makeStyles } from '@material-ui/core';
import About from '../pages/about'
import Cart from '../pages/cart';

const useStyles = makeStyles(() => ({
    container : {
        padding: "20px",
        textAlign: "center",
    },
    link: {
        padding: "10px",
    }
}));

const Routes = () => {
    const classes = useStyles();
    return(
        <Router >
            <nav className={classes.container}>
                <Link className={classes.link} to="/">Home</Link>
                <Link className={classes.link} to="/about">About</Link>
                <Link className={classes.link} to="/cart" >Cart</Link>
            </nav>
            <Switch>
                <Route exact path="/" component={Store} />
                <Route path="/about" component={ About } />
                <Route path="/cart" component={ Cart } />
                <Route path="/products/:slug" component={ ProductDetails } />
            </Switch>
        </Router>
    )
}

export default Routes;