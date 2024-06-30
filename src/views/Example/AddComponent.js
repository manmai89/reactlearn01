import React, { Component } from 'react';

class AddComponent extends Component {

    state = {
        title: "",
        salary: "",
    }

    handleTitleJob = (event) => {
        this.setState({
            title: event.target.value,

        })
    }

    handleSalary = (event) => {
        this.setState({
            salary: event.target.value,

        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params');
            return;
        }

        console.log("Bien state: ", this.state);
        this.props.addNewJob(
            { id: Math.floor(Math.random() * 100), title: this.state.title, salary: this.state.salary }
        );
        this.setState(
            {
                title: "",
                salary: "",
            }
        )
    }


    render() {
        return (
            <div>
                <form>
                    <label>Job title:</label><br />
                    <input type="text" value={this.state.title} onChange={(event) => { this.handleTitleJob(event) }} /><br />

                    <label>Salary:</label><br />
                    <input type="text" value={this.state.salary} onChange={(event) => { this.handleSalary(event) }} /><br /><br />

                    <input type="button" defaultValue="Submit" onClick={(event) => { this.handleSubmit(event) }} />
                </form>
            </div>
        );
    }
}

export default AddComponent;