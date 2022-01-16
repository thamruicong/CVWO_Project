import React, { Component, useEffect, useState } from 'react'

function TaskForm(props) {
    return (
        <div>
            <p>This is the TaskForm component for our app.</p>

            <div>
                <form onSubmit={props.handleSubmit}>
                    <label>
                        Title: 
                        <input type="text" name="title" value={props.task.title} required onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Tag: 
                        <select name="tag_id" value={props.task.tag_id} required onChange={props.handleChange}>
                            <option value=''>----------</option>
                            {
                                props.tags
                                .map(tag => 
                                    <option value={tag.id} key={tag.id}>{tag.name}</option>
                                )
                            }
                        </select>
                    </label>
                    <br />
                    <br />
                    <label>
                        Date: 
                        <input type="date" name="date" value={props.task.date} onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Time: 
                        <input type="time" name="time" value={props.task.time} onChange={props.handleChange} />
                    </label>
                    <br />
                    <br />
                    <label>
                        Completed: 
                        <input type="checkbox" name="completed" checked={props.task.completed} onChange={props.handleCheckbox} />
                    </label>
                    <br />
                    <br />
                    <button type="submit">{props.button_text}</button>
                </form>
            </div>
        </div>
    )
}

// class NewTask extends Component {
//     render() {
//         console.log(this.props.tags);

//         return (
//             <div>
//                 <p>This is the NewTask component for our app.</p>

//                 <form onSubmit={this.props.handleSubmit}>
//                     <label>
//                         Title: 
//                         <input type="text" name="title" required onChange={this.props.handleChange} />
//                     </label>
//                     <br />
//                     <br />
//                     <label>
//                         Tag_id: 
//                         <select name="tag_id" required onChange={this.props.handleChange}>
//                             <option value={undefined}>----------</option>
//                             {
//                                 this.props.tags
//                                 .map(tag => 
//                                     <option value={tag.id} key={tag.id}>{tag.name}</option>
//                                 )
//                             }
//                         </select>
//                     </label>
//                     <br />
//                     <br />
//                     <label>
//                         Date: 
//                         <input type="date" name="date" onChange={this.props.handleChange} />
//                     </label>
//                     <br />
//                     <br />
//                     <label>
//                         Time: 
//                         <input type="time" name="time" onChange={this.props.handleChange} />
//                     </label>
//                     <br />
//                     <br />
//                     <button type="submit">Add</button>
//                 </form>
//             </div>
//         )
//     }
// }

export default TaskForm