import { useState } from "react";

import "./App.scss";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from "./components/EditTaskForm";
import useLocalStorage from "./components/useLocalStorage";

function App() {
  // !!! show add task form
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  // !!! show edit task form
  const [showEditTaskForm, setShowEditTaskForm] = useState(false);

  // !!! get tasks from localStorage
  const [tasks, setTasks] = useLocalStorage("saveTasks", []);

  // !!! set clickedTask
  const [clickedTask, setClickedTask] = useState("");

  // !!! save task
  const saveTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };

    const newTasks = [newTask, ...tasks];

    setTasks(newTasks);

    // *** close the form
    setShowAddTaskForm(!showAddTaskForm);
  };

  // !!! delete task
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);
  };

  // !!! edit task
  const editTask = (id) => {
    // console.log(id);
    const thisTask = tasks.find((task) => task.id === id);
    // console.log(thisTask);
    setClickedTask(thisTask);

    // *** open the EditTaskForm
    setShowEditTaskForm(!showEditTaskForm);
  };

  // !!! save edit task
  const saveEditTask = (task) => {
    // *** get edited task's index
    const editTaskIndex = tasks.findIndex((t) => t.id === task.id);

    // *** update edited task in the tasks array
    tasks[editTaskIndex] = task;
    // console.log(tasks);

    // *** use spread operator to copy tasks, it produce a new tasks.
    // *** In this way, then setTasks/useLocalStorage will save this updated tasks into localStorage. (If we didn't make a new copy, localStorage won't be updated.)
    const newTasks = [...tasks];

    setTasks(newTasks);

    // *** close the EditTaskForm
    setShowEditTaskForm(!showEditTaskForm);
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTaskForm(!showAddTaskForm)} />
      {showAddTaskForm && (
        <AddTaskForm
          //*** close AddTaskForm
          onAdd={() => setShowAddTaskForm(!showAddTaskForm)}
          saveTask={saveTask}
        />
      )}
      {showEditTaskForm && (
        <EditTaskForm
          //*** close EditTaskForm
          onEdit={() => setShowEditTaskForm(!showEditTaskForm)}
          clickedTask={clickedTask}
          saveEditTask={saveEditTask}
        />
      )}

      <Tasks tasks={tasks} deleteTask={deleteTask} editTask={editTask} />

      {tasks.length <= 0 && (
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

// [
//   {
//     id: 1,
//     name: "Food Shopping",
//     time: "08 Mar 2022 5:15 PM",
//     color: "blue",
//   },
//   {
//     id: 2,
//     name: "Wash clothes",
//     time: "23 Jul 2021 9:00 AM",
//     color: "pink",
//   },
//   {
//     id: 3,
//     name: "Exercise",
//     time: "26 Nov 2021 6:30 PM",
//     color: "yellow",
//   },
// ]
