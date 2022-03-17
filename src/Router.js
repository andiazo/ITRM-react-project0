import React from 'react';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import SellerView from './views/SellerView';
import BuyerView from './views/BuyerView';
import LoginView from './views/LoginView';
import ProductView from './views/ProductView'; 
import ProtectedRoutes from './utils/protectedRoutes';


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
                    <Route path="/sell" element={<ProtectedRoutes/>}>
                        <Route path="/sell" exact element={<SellerView />} />
                    </Route>
                    <Route path="/products" exact element={<ProductView />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;