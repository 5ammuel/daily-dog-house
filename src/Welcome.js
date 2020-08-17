import React, { Component } from 'react';
//This is where the Title of the page lives


class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
         };
    }
    render() {
        return (
            <div>
                <h1>
                   Welcome to the Dog House! 
                </h1>
                <h2>
                    Click "Woof!" to see a new doggo!
                </h2>
            </div>
        );
    }
}

export default Welcome;