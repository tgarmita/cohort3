import React, { Component } from 'react';

class Even extends Component {

    render() {
        if (this.props.number % 2 !== 0) {
            return null;
        }

        return (
            <div>
                <h1>Hello World from Even</h1>
            </div>
        )
    }
}

export default Even;
