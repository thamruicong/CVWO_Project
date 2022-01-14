import React, { Component, useEffect, useState } from 'react'

function ListTasks(props) {
    return (
        <div>
            <p>This is the ListTasks component for our app.</p>
            
            <div>
                <ol>
                    {
                        props.tasks
                            .map(task => 
                                <li key={task.id}>{task.title}</li>
                                )
                    }
                </ol>
            </div>
        </div>
    )
}

// class ListTasks extends Component {
//     render() {
//         console.log(this.props.tasks);

//         return (
//             <div>
//                 <p>This is the ListTasks component for our app.</p>
//                 <ol>
//                     {
//                         this.props.tasks
//                             .map(task => 
//                                 <li key={task.id}>{task.title}</li>
//                                 )
//                     }
//                 </ol>
//             </div>
//         )
//     }
// }

export default ListTasks