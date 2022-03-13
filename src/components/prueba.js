import React from 'react';

class Prueba extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            pass: ''
        }
    }

    componentDidMount() {
        console.log('DidMount')
        this.setState({
            pass: this.props.pass
        })
    }

    strToHex(str) {
        var hex = '';
        for(var i = 0; i < str.length; i++){
            hex += ''+str.charCodeAt(i).toString(16);
        }
        return hex;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should')
        if(nextState.pass === 'nopasa') {
            return false;
        }
        else {
            nextState.pass = this.strToHex(nextState.pass)
            return true;
        }
    }

    render() {
        return(
            <div>
                Hola: { this.state.pass }
            </div>
        )
    }
}

export default Prueba;