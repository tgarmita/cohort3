import React, { Component } from 'react';

class MyComp extends Component {

    render() {
        return (
            <div>
                <h1>Hello World from MyComp. {this.props.whatToSay}</h1>

                <button onClick={this.props.pushMe}>Push Me</button>
            </div>
        )
    }
}

export default MyComp;
