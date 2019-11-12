import React, { Component } from 'react';

class Odd extends Component {

    render() {
        if (this.props.number % 2 === 0) {
            return null;
        }

        return (
            <div>
                <h1>Hello World from Odd</h1>
            </div>
        )
    }
}

export default Odd;
