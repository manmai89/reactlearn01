import React, { Component } from 'react';

class MyComponent extends Component {

    state = {
        name: "Man mai",
        channel: "madotheme"
    }

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {

        // let myname = "Man Mai";

        return (
            <>
                <div>
                    <input value={this.state.name} type="text" onChange={(event) => { this.handleOnChangeName(event) }} />
                    Xin chào {this.state.name}
                </div>
                <div>
                    My youtube {this.state.channel}
                </div>
            </>
        );
    }
}

export default MyComponent;