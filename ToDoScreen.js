import { Component } from "react";
import { useState } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

// class ToDoScreen extends Component{
//     state={
//         taskcount: 0,
//     }
//     render(){
//         return(
//             <div className="screen">
//                 <h1 className="ui heading center">To Do List</h1>
//                 <button onClick={(e)=>{
//                     this.setState({
//                         ...this.state, taskcount: this.state.taskcount+1,
//                     })
//                     console.log(this.state.taskcount);
//                     console.log("add task button was clicked")
//                 }} className="ui secondary button">Add Task</button>
//                 <p>the number of tasks are: {this.state.taskcount}</p>
//             </div>
//         )
//     }
// }


const ToDoScreen=()=>{
    const [tasklist,setTaskList]=useState([]);

    let addNewTask=(task)=>{
        setTaskList([...tasklist, {...task,createdDate:new Date()}])
    }


    return(
                    <div className="screen">
                        <h1 className="ui heading center">To Do List</h1>
                        <button onClick={(e)=>{
                            setTaskList([...tasklist, {
                                title: "go to gym",
                                description: "going to gym is good for muscle growth.",
                                createdDate: new Date(),
            
                            }])
                            // setTaskCount(taskcount+1);
                            // console.log("add task button was clicked")
                        }} className="ui secondary button">Add Task</button>
                        <section>
                        <div className="ui cards">
                        {tasklist.map((task, index)=>(
                            <Task task={task} key={(index)}/>
                        ))}
                        </div>
                        </section>
                        <AddTask onSubmit={addNewTask}/>
                        </div>
                )
}
export default ToDoScreen;