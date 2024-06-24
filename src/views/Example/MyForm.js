import React, { Component } from 'react';
// import ChildComponent from './ChildComponent';
import ConditionReact from './ConditionReact';



class MyForm extends Component {

    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: 'job01', title: 'Developer', salary: '500' },
            { id: 'job02', title: 'Tester', salary: '300' },
            { id: 'job03', title: 'Designer', salary: '700' },
            { id: 'job04', title: 'Leader', salary: '2000' },
        ]
    }

    handleFirstName = (event) => {
        this.setState({
            firstName: event.target.value,

        })
    }

    handleLastName = (event) => {
        this.setState({
            lastName: event.target.value,

        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("Bien state: ", this.state);
    }

    render() {
        console.log("Render of MyForm play: ", this.state);
        return (
            <div>
                <div>
                    <h2>HTML Forms</h2>
                    <form>
                        <label htmlFor="fname">First name:</label><br />
                        <input type="text" defaultValue={this.state.firstName} onChange={(event) => { this.handleFirstName(event) }} /><br />
                        <label htmlFor="lname">Last name:</label><br />
                        <input type="text" defaultValue={this.state.lastName} onChange={(event) => { this.handleLastName(event) }} /><br /><br />
                        <input type="button" defaultValue="Submit" onClick={(event) => { this.handleSubmit(event) }} />
                    </form>


                </div>

                {/* <ChildComponent name={this.state.firstName} age={'30'} arrJobsName={this.state.arrJobs} /> */}

                <ConditionReact name={this.state.firstName} age={'30'} arrJobsName={this.state.arrJobs} />


            </div>
        );
    }
}

export default MyForm;