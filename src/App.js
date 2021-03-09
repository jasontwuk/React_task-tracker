import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.scss";
import { useState } from "react";

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

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <span>No Tasks To Show</span>
      )}
    </div>
  );
}

export default App;
