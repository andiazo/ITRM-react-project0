import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import Footer from './components/footer'
import reportWebVitals from './reportWebVitals';
import ProductCard from './components/productCard';
import RegisterProduct from './components/registerProduct';
import ProductList from './components/productList';
import Prueba from './components/prueba';
import PruebaFuncional from './components/pruebaFuncional';
import Router from './Router';


let username = 'Vitalik';
let productName = 'Tshirt Monalisa Weed';
let productImg = 'https://acrilicofluido.com/wp-content/uploads/2021/12/NFT-MONALISA.jpg';
let productPrice = '2 ETH';
let productDesc = 'A beautiful unisex T-shirt'
let products = [
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

ReactDOM.render(
  <React.StrictMode>
    {/* <App />
    <ProductCard productName={productName} productImg={productImg} productDesc={productDesc} productPrice={productPrice}/>
    <RegisterProduct username={username} />
    <ProductList products={products}/>
    <Prueba pass='nopasa'/>
    <PruebaFuncional />
    <Footer /> */}
    <Router />
    
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
