import React from 'react';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isLogged: true,
            };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isLogged: !prevState.isLogged
        }))
        window.open("https://metamask.io/");
    }

    render(){
        return(
            <div className='login'>
                <div className='card'>
                    <div className='container'>
                        <h1>Hello friend!</h1>
                        <p>Welcome back. Login to view amazing clothes</p>
                        <button onClick={this.handleClick}>
                                <img src={`${process.env.PUBLIC_URL}/metamask-white.png`}></img>
                                <span>{this.state.isLogged ? 'Logged with metamask':'If you don\'t have metamask, please install it' }</span>
                        </button>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Login;