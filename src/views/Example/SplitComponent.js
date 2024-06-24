import React, { Component } from 'react';
import AddComponent from './AddComponent';
import ConditionReact from './ConditionReact';



class SplitComponent extends Component {
    state = {

        arrJobs: [
            { id: 'job01', title: 'Developer', salary: '500' },
            { id: 'job02', title: 'Tester', salary: '300' },
            { id: 'job03', title: 'Designer', salary: '700' },
            { id: 'job04', title: 'Leader', salary: '2000' },
        ]
    }


    addNewJob = (job) => {
        console.log("Kiem tra xem gia tri bien truyen di", job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }
    render() {

        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ConditionReact arrJobsName={this.state.arrJobs} />
            </>
        );
    }
}

export default SplitComponent;