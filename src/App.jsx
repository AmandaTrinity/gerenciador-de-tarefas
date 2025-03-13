import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([{

    id: 1,
    title: 'Estudar programação',
    description: 'Estudar linguagem React',
    isCompleted: true,
  },
  {
    id: 2,
    title: 'Ir ao shopping',
    description: 'Comprar blusa vermelha',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Ir ao supermercado',
    description: 'Comprar laranja',
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
   return (
    <div className="w-screen h-screen bg-purple-400 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-white-800 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask/>
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
