import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SellerView from './views/SellerView';
import BuyerView from './views/BuyerView';
import LoginView from './views/LoginView';
import ProductView from './views/ProductView';


class Router extends React.Component {
    // TODO
    render() {
        return(
            <BrowserRouter>
                <Link to="/">Login</Link> -
                <Link to="/buy">Buy</Link> -
                <Link to="/sell">Sell</Link> - 
                <Link to="/products">Products</Link>
                <Routes>
                    <Route path="/" exact element={<LoginView />} />
                    <Route path="/buy" exact element={<BuyerView />} />
                    <Route path="/sell" exact element={<SellerView />} />
                    <Route path="/products" exact element={<ProductView />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;