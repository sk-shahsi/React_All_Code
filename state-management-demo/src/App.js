/*
- import useState from react
-call useState inside our function with an initial value
- get back two thing in our array
--use array destructurung to unpack those two things
- use them to make our UI intractive

cons[somthing, setSomthing] = useState(initialValue)


*/

import React ,{useState} from "react";

function App(){

   const[newTask, setNewTask] = useState('');
   const[tasks, setTasks] = useState([]);
   console.log('Component rendered! Current input:',newTask);
   console.log('Current tasks:',tasks);
   console.log('current input:',newTask)

    const handleAddTask =()=>{
      if(newTask.trim()){
        const task = {
          id: Date.now(),
          text: newTask,
          completed: false,

        }
        console.log('Createing task object:', task)
        console.log('Adding task:', newTask);
        setTasks([...tasks, task]);
        setNewTask('');

      }
    
    
    }
    console.log('Component render! current input:',newTask);

  

   return(
    <div>
      <h1>My Task List</h1>
      <input  
      value={newTask}
      onChange={(e)=>setNewTask(e.target.value)}
      placeholder="Enter Task.....!"/>
      <button onClick={handleAddTask}>Add Task</button>


      <ul>
        {tasks.map(task=>(
          <li key={task.id}>{task.text}</li>
        ))}
      </ul>
    </div>
    );
}
export default App;

// 35minutes