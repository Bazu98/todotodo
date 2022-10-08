import React, { useState } from "react";
import { Task } from "./Task";

function App() {
  const [taskName,setTaskName] = useState("");
  const [time,setTime] = useState("");
  const [taskList, setTaskList] = useState([]);
  const addTask = () => {
    setTaskList([...taskList, {task: taskName, time: time}])
    setTaskName("");
    setTime("");
  }

  const deleteItem = (id) => {
    const newArray = taskList.filter(task => task.id !==id)
    setTaskList(newArray)
  }
  return (
    <div>
      <h1>Todo List</h1>
      <label>Task Name:</label>
      <input type='text' id="task"  onChange={(e) => {
        setTaskName(e.target.value)
      }}/>
      <label>Time</label>
      <input type="text" id="time" onChange={(e) =>{
        setTime(e.target.value)
      }}/>

      <button onClick={addTask}>Add</button>
      {taskList.map((task) => {
        return (
          <div> 
        <Task key={taskName.id} taskName={task.task} time={task.time}/>
        <button onClick={() => deleteItem(taskName.id)}>Delete</button>
          </div>
        
        )
      })}
    </div>
  );
}

export default App;
