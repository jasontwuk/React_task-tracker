import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.scss";
import { useState, useEffect } from "react";
import AddTaskForm from "./components/AddTaskForm";

function App() {
  const [tasks, setTasks] = useState([]);

  // !!! display tasks
  useEffect(() => {
    const displayTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    displayTasks();
  }, []);

  // !!! fetch tasks from server
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

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
