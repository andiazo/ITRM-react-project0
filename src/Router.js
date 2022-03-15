import React from 'react';
import BrowserRouter, { Routes, Route } from 'react-router-dom';
import SellerView from './views/SellerView';
import BuyerView from './views/BuyerView';
import LoginView from './views/LoginView';
import ProductView from './views/ProductView';


class Router extends React.Component {
    // TODO
    render() {
        return(
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginView />} />
                    <Route path="/buy" element={<BuyerView />} />
                    <Route path="/sell" element={<SellerView />} />
                    <Route path="/products" element={<ProductView />} />
                </Routes>
            </BrowserRouter>
        )
    }
}