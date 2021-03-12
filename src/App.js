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
      time: "02/03 at 10:30am",
      color: "blue",
    },
    {
      id: 2,
      name: "Wash clothes",
      time: "08/03 at 15:30am",
      color: "pink",
    },
    {
      id: 3,
      name: "Exercise",
      time: "21/04 at 9:00am",
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
