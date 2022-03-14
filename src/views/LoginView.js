import React from 'react';
import Navbar from '../components/navbar';
import Login from '../components/login';
import Main from '../components/main';
import Footer from '../components/footer';


class LoginView extends React.Component {
    render() {
        return(
            <>
                <Navbar />
                <Main>
                    <Login />
                </Main>
                <Footer />
            </>
        )
    }
}