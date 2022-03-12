import React from 'react';

// Tasks of the day
// Implement at least 2 components of your components diagram (both on functional and class syntaxes)
// Implement events on each component (at least "onclick" both on functional an class syntaxes)
// Implement rudimentary styling on each component
// Add state management to each component (check "state" on video resources)
// Define Props for every component in the app

// Class component 

class Main extends React.Component {
    
    render(){
        <div className='main'>
            {this.props.children}
        </div>
    }
}