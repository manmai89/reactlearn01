import React, { Component } from 'react';
import './Demo.scss';

class ConditionReact extends Component {

    state = {
        showJobs: false
    }


    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        // console.log(">>>>HandleOnClickDel", job);
        this.props.deleteAJob(job);
    }
    render() {

        let { arrJobsName } = this.props;
        let { showJobs } = this.state;



        return (
            <>
                {
                    showJobs === false ?
                        <div><button className='btn-show' onClick={() => this.handleShowHide()}>Show</button></div>
                        :
                        <>
                            <div className='job-list'>
                                {
                                    arrJobsName.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary}

                                                <span onClick={() => { this.handleOnClickDelete(item) }}>   X</span>
                                            </div>
                                        )

                                    })
                                }
                            </div>
                            <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                        </>
                }
            </>
        );


    }
}

export default ConditionReact;