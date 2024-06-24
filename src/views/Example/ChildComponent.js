import React, { Component } from 'react';

class ChildComponent extends Component {
    render() {

        console.log("Render of ChildComponent play: ", this.props);

        // let name = this.props.name;
        // let age = this.props.age;

        let { arrJobsName } = this.props;

        return (
            <div>
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


            </div>
        );
    }
}



// const ChildComponent = (props) => {

//     let { arrJobsName } = props;

//     return (
//         <div>
//             <div className='job-list'>
//                 {
//                     arrJobsName.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>


//         </div>
//     );
// }

export default ChildComponent;