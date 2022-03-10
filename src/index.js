import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import Footer from './components/footer'
import reportWebVitals from './reportWebVitals';
import ProductCard from './components/productCard';


let username = 'Vitalik';
let productName = 'Tshirt Monalisa Weed';
let productImg = 'https://acrilicofluido.com/wp-content/uploads/2021/12/NFT-MONALISA.jpg';
let productPrice = '2 ETH';
let productDesc = 'A beautiful unisex T-shirt'


ReactDOM.render(
  <React.StrictMode>
    <Navbar username={username} />
    <App />
    <ProductCard productName={productName} productImg={productImg} productDesc={productDesc} productPrice={productPrice}/>
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
