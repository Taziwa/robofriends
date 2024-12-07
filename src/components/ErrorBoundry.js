import React, { Component } from 'react';

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false, // Added semicolon here
        };
    }

    componentDidCatch(error, info){
        this.setState({ hasError: true })
    }
    


    render() { // Moved the render method inside the class
        if (this.state.hasError) {
            return <h1>Oooops. That is not good</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundry;
