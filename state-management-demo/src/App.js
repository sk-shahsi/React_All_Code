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
   const totalTasks = tasks.length;
   const completedTasks = tasks.filter(task => task.completed).length;
    const remaningTasks = totalTasks - completedTasks;
    console.log('stats - total:', totalTasks, 'completed:', completedTasks, 'remaining:', remaningTasks);
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

    const toggleTask = (id)=>{ 
    console.log('Toggling task with id:',id);
    setTasks(tasks.map(task=>{
      //this is the task we want to toggel
      if(task.id === id){
        //create a new task object with complet flipped

        return {...task, completed: !task.completed};
      }

      return task;
    }))

    }  
    
    const deleteTask = (id) =>{
      console.log("Deleting task with id:", id);
      setTasks(tasks.filter(task => task.id !== id));

    }
  

   return(
    <div>
      <h1>My Task List</h1>
      <div style={{
        backgroundColor: '#f0f0f0', padding: '10px', margin: '10px 0', borderRadius: '5px'}}>
          <h3>Task Statistics</h3>
          <p>Total Tasks: {totalTasks}</p>
          <p>Completed Tasks: {completedTasks}</p>
          <p>Remaining Tasks: {remaningTasks}</p>
           </div>
      <input  
      value={newTask}
      onChange={(e)=>setNewTask(e.target.value)}
      placeholder="Enter Task.....!"/>
      <button onClick={handleAddTask}>Add Task</button>


      <ul>
        {tasks.map(task=>(
          <li key={task.id}>
            <input type="checkbox" checked={task.completed} 
            onChange={() => toggleTask(task.id)}
            />
            <span>{task.text}</span>

            <button onClick={() => deleteTask(task.id)}>Delete</button>
              
              </li>
        ))}
      </ul>
    </div>
    );
}
export default App;

