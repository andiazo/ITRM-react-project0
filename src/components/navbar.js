import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';


class Navbar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            aClassHome: true,
            aClassMarketPlace: false,
            isLogged: false,
            };
        this.handleClick = this.handleClick.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }
    
    handleClickLogin() {
        this.setState(prevState => ({
            isLogged: !prevState.isLogged
        }));
    }
    
    handleClick() {
        this.setState(prevState => ({
            aClassHome: !prevState.aClassHome,
            aClassMarketPlace: !prevState.aClassMarketPlace
        }));
    }

    render(){
        return(
            <div className="navbar">
                <Link to="/">Login</Link> -
                <Link to="/buy">Buy</Link> -
                <Link to="/sell">Sell</Link> - 
                <Link to="/products">Products</Link>
            </div>
        )
    }
}

export default Navbar;