import React from 'react';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            this.props.children 
        )
    }
}

export default Main;