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

    handleClickButton = () => {
        console.log("Hello");
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
                <div className="third">
                    <button onClick={(event) => { this.handleClickButton(event) }}>
                        Click Me
                    </button>
                </div>

            </>
        );
    }
}

export default MyComponent;