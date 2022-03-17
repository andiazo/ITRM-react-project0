import React from 'react';
// import AuthService from '../services/authService';
import logout from '../services/logoutService';
import loginWithEth from '../services/loginService';
import getRole from '../services/roleService';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLogged: true,
            promise: '',
            };
        this.handleClick = this.handleClick.bind(this);
        this.handlePromise = this.handlePromise.bind(this);
    }

    handlePromise(){
        let newPromise = new Promise((resolve, reject) => {
            resolve('Promesa del login resuelta');
        })    
    
        newPromise.then( result => {
            console.log(result)
            this.setState({
                promise: result
            })
            
         }, function(error) {
            console.log(error)
            this.setState({
                promise: error
            })
            
         });
         
    }
    

    handleLogin() {
        loginWithEth();
        getRole(window.userAddress)
    }

    handleLogout() {
        logout();
        getRole(window.userAddress)
    }

    handleClick() {
        this.setState(prevState => ({
            isLogged: !prevState.isLogged
        }))
        // window.open("https://metamask.io/");
        // loginWithEth();
    }

    render(){
        return(
            <div className='login'>
                <div className='card'>
                    <div className='container'>
                        <h1>Hello friend!</h1>
                        <p>Welcome back. Login to view amazing clothes</p>
                        <p onClick={this.handlePromise}>Promesa: {this.state.promise}</p>
                        <button onClick={this.handleClick}>
                                <img src={`${process.env.PUBLIC_URL}/metamask-white.png`}></img>
                                <span>{this.state.isLogged ? 'Logged with metamask':'If you don\'t have metamask, please install it' }</span>
                        </button>

                        <br />
                        <button onClick={this.handleLogin}>Login</button>
                        <button onClick={this.handleLogout}>Logout</button>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Login;