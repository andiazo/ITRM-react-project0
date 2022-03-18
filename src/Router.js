import React from 'react';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import SellerView from './views/SellerView';
import BuyerView from './views/BuyerView';
import LoginView from './views/LoginView';
import ProductView from './views/ProductView'; 
import ProtectedRoutes from './utils/protectedRoutes';
import Navbar from './components/navbar';




class Router extends React.Component {
    // TODO
    constructor(props) {
        super(props);
        this.products = [
            {
              id: 1,
              productName: 'Producto 1',
              productImg: 'https://acrilicofluido.com/wp-content/uploads/2021/12/NFT-MONALISA.jpg'
            },
            {
              id: 2,
              productName: 'Producto 2',
              productImg: 'https://purodiseno.lat/wp-content/uploads/2021/05/NFT-1024x574.jpg'
            },
            {
              id: 3,
              productName: 'Producto 3',
              productImg: 'https://ci5.googleusercontent.com/proxy/nLg3GMTcB9SWdlmN0KTBH_IZR8hHriFNspCjS-ksznpRYCpArk7GtwGwRiLLxIubBXxsCcsndwgmdfsw5z89XksuNvOXhYz1lcGw5jfFTJiRa2xCan088Rodv8mR7Si3WDo=s0-d-e1-ft'
            }
          ]
    }


    render() {
        return(
            
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<LoginView />} />
                    <Route path="/sell" element={<ProtectedRoutes/>}>
                        <Route path="/sell" exact element={<SellerView />} />
                    </Route>
                    <Route path="/products" exact element={<ProductView products={this.products}/>} />
                    <Route path="/buy" exact element={<BuyerView />} />
                </Routes>
            </BrowserRouter>
        )
    }
}

export default Router;