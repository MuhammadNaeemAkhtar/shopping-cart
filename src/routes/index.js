import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Store from '../pages/store'
import ProductDetails from '../components/ProductDetails';

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Store} />
                <Route path="/products/:slug" component={ ProductDetails } />
            </Switch>
        </Router>
    )
}

export default Routes;