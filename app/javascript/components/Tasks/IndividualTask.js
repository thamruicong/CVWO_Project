import React, { Component } from 'react'

function IndividualTask(props) {
    return (
        <div>
            <p>This is the IndividualTask component of our app.</p>

            <div>
                <p>Title : {props.task.title}</p>

                <p>Tag : {props.task.tag_id}</p>
                {/* <p>Tag : {props.tag.name}</p> */}
                
                <p>Date : {props.task.date}</p>
                
                <p>Time : {props.task.time}</p>
                
                <p>Completed : 
                    {
                        props.task.completed ? " Done" : " Incomplete"
                    }
                </p>
            </div>
        </div>
    )
}

// class IndividualTask extends Component {
//     render() {
//         console.log(this.props.task);

//         return (
//             <div>
//                 <p>This is the IndividualTask component of our app.</p>
//             </div>
//         )
//     }
// }

export default IndividualTask