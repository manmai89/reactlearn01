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

        // let currentJobs = this.state.arrJobs;
        // currentJobs.push(job);

        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs
        })
    }


    deleteAJob = (job) => {

        let currentJobs = this.state.arrJobs;

        currentJobs = currentJobs.filter(item => item.id !== job.id)
        this.setState({

            arrJobs: currentJobs
        })
    }


    componentDidMount() {
        console.log("Run componentDidMount");
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Run componentDidUpdate", "PrevState: ", prevState, "CurrentState:", this.state);
    }


    render() {

        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />
                <ConditionReact arrJobsName={this.state.arrJobs} deleteAJob={this.deleteAJob} />
            </>
        );
    }
}

export default SplitComponent;