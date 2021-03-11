import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.scss";
import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Food Shopping",
      time: "02/03 at 10:30am",
    },
    {
      id: 2,
      text: "Wash clothes",
      time: "08/03 at 15:30am",
    },
    {
      id: 3,
      text: "Exercise",
      time: "21/04 at 9:00am",
    },
  ]);

  // !!! delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // !!! show add task form
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTaskForm(!showAddTaskForm)} />
      {showAddTaskForm && (
        <AddTaskForm onAdd={() => setShowAddTaskForm(!showAddTaskForm)} />
      )}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <span>Well done, there are no more tasks to be completed.</span>
      )}
    </div>
  );
}

export default App;
