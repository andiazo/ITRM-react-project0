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
                <a className={this.state.aClassHome ? 'active': ''} onClick={this.handleClick} href="#">Home</a>
                <a className={this.state.aClassMarketPlace ? 'active': ''} onClick={this.handleClick} href="#">MarketPlace</a>
                <a onClick={this.handleClickLogin} href="#">{this.state.isLogged ? 'Login': this.props.username}</a>
            </div>
        )
    }
}

export default Navbar;