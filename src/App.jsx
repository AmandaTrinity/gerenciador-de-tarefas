import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: 'Study programming',
    description: 'Study React language',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Go shopping',
    description: 'Buy a red shirt',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Go to the supermarket',
    description: 'Buy oranges',
    isCompleted: false,
  },
  ]);

  function onTaskClick (taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId){
        return{... task,isCompleted: !task.isCompleted}
      }

      return task
    })
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }
  
  function onAddTask(title) {
    const newTask = {
        id: Date.now(),
        title: title,
        description: '', 
        isCompleted: false,
    };
    // Adiciona a nova tarefa no final da lista
    setTasks(prevTasks => [...prevTasks, newTask]);
  }

   return (
    <div className="w-screen h-screen bg-purple-900 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Task Manager</h1>
        <AddTask onAddTask={onAddTask} /> 
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}
export default App