import React, { Component } from 'react';

class ConditionReact extends Component {

    state = {
        showJobs: false
    }


    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    render() {

        let { arrJobsName } = this.props;
        let { showJobs } = this.state;



        return (
            <>
                {
                    showJobs === false ?
                        <div><button onClick={() => this.handleShowHide()}>Show</button></div>
                        :
                        <>
                            <div className='job-list'>
                                {
                                    arrJobsName.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary}
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