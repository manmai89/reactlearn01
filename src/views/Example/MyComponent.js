import React, { Component } from 'react';

class MyComponent extends Component {

    state = {
        name: "Man mai",
        channel: "madotheme"
    }

    handleOnChangeName = (event) => {

        console.log(event.target.value, "////", event.target, "////\\\\", event);

        this.setState({
            name: event.target.value
        })
    }

    handleClickButton = () => {
        console.log("Hello");
    }

    render() {

        // let myname = "Man Mai";
        console.log("Hàm render được gọi/ Biến state: ", this.state);

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