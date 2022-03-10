import React from 'react';

class Login extends React.Component {
    render(){
        return(
            <div className='login'>
                <div className='card'>
                    <div className='container'>
                        <h1>Hello friend!</h1>
                        <p>Welcome back. Login to view amazing clothes</p>
                        <button>
                                <img src={`${process.env.PUBLIC_URL}/metamask-white.png`}></img>
                                <span>Login with metamask</span>
                        </button>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default Login;