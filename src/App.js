import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.scss";
import { useState } from "react";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Food Shopping",
      time: "08 Mar 2022 5:15 PM",
      color: "blue",
    },
    {
      id: 2,
      name: "Wash clothes",
      time: "23 Jul 2021 9:00 AM",
      color: "pink",
    },
    {
      id: 3,
      name: "Exercise",
      time: "26 Nov 2021 6:30 PM",
      color: "yellow",
    },
  ]);

  // !!! save task
  const saveTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };

    setTasks([newTask, ...tasks]);

    // *** close the form
    // setShowAddTaskForm(!showAddTaskForm);
  };

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
        <AddTaskForm
          onAdd={() => setShowAddTaskForm(!showAddTaskForm)}
          saveTask={saveTask}
        />
      )}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} deleteTask={deleteTask} />
      ) : (
        <p>
          <em>Well done.</em>
          <br />
          There are no more tasks to be completed.
        </p>
      )}
    </div>
  );
}

export default App;
