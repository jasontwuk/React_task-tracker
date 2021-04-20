import { useState, useRef } from "react";

import { v4 as uuidv4 } from "uuid";

import "./App.scss";

import Header from "./components/Header";
import Sorter from "./components/Sorter";
import Tasks from "./components/Tasks";
import Footer from "./components/Footer";
import AddTaskForm from "./components/AddTaskForm";
import EditTaskForm from "./components/EditTaskForm";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  // !!! show add task form
  const [showAddTaskForm, setShowAddTaskForm] = useState(false);

  // !!! show edit task form
  const [showEditTaskForm, setShowEditTaskForm] = useState(false);

  // !!! get tasks from localStorage
  const [tasks, setTasks] = useLocalStorage("saveTasks", []);

  // !!! set clickedTask
  const [clickedTask, setClickedTask] = useState("");

  // !!! set colorTasks
  const [colorTasks, setColorTasks] = useState([]);

  // !!! set colorRef
  const colorRef = useRef([]);

  // !!! decide to show colorTasks or tasks
  const [showColorTasks, setShowColorTasks] = useState(false);

  // !!! save task
  const saveTask = (task) => {
    // *** add .active to the ".all" button
    addActiveClass("all");

    // *** use uuid to create universally unique id
    const id = uuidv4();

    const newTask = { id, ...task };

    const newTasks = [newTask, ...tasks];

    setTasks(newTasks);

    // *** close the form
    setShowAddTaskForm(!showAddTaskForm);

    // *** hide colorTasks and show tasks
    setShowColorTasks(false);
  };

  // !!! delete task
  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasks(newTasks);

    // *** if showColorTasks is true, show the updated colorTasks
    if (showColorTasks) {
      setColorTasks(newTasks.filter((task) => task.color === colorRef.current));
    }
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
    // console.log(task);

    // *** get edited task's index
    const editTaskIndex = tasks.findIndex((t) => t.id === task.id);
    // console.log(editTaskIndex);

    // *** update edited task in the tasks array
    tasks[editTaskIndex] = task;
    // console.log(tasks);

    // *** use spread operator to copy tasks, it produce a new tasks.
    // *** In this way, then setTasks/useLocalStorage will save this updated tasks into localStorage. (If we didn't make a new copy, localStorage won't be updated.)
    const newTasks = [...tasks];

    // *** for rerender tasks
    setTasks(newTasks);

    // *** for rerender colorTasks
    if (showColorTasks) {
      // *** use the updated tasks to filter out the selected color tasks, then update colorTasks to that array.
      // *** (because colorTasks is an array, we can use [0] to its first item and use it to access to its color value)
      setColorTasks(tasks.filter((task) => task.color === colorTasks[0].color));
      // console.log(colorTasks);
    }

    // *** close the EditTaskForm
    setShowEditTaskForm(!showEditTaskForm);
  };

  // !!! get color tasks
  const getColorTasks = (color) => {
    // console.log(color);

    // *** dynamically add .active to colour buttons
    addActiveClass(color);

    // *** when the "all" button is clicked
    if (color === "all") {
      // *** hide colorTasks and show tasks
      setShowColorTasks(false);
      return;
    }

    // *** filter out the selected color tasks, then update colorTasks to that array
    setColorTasks(tasks.filter((task) => task.color === color));
    // console.log(colorTasks);

    // *** show colorTasks and hide tasks
    setShowColorTasks(true);

    // *** update colorRef
    colorRef.current = color;
  };

  // !!! get time tasks
  const getTimeTasks = (dir) => {
    // *** dynamically add .active to time buttons
    addActiveClass(dir);

    // *** make a deep copy of tasks
    let timeTasks = JSON.parse(JSON.stringify(tasks));

    // *** from the most recent (at top) to the distant (at bottom)
    if (dir === "time-up") {
      timeTasks = timeTasks.sort(
        (a, b) => Date.parse(a.time) - Date.parse(b.time)
      );
      // *** from the most distant (at top) to the recent (at bottom)
    } else {
      timeTasks = timeTasks.sort(
        (a, b) => Date.parse(b.time) - Date.parse(a.time)
      );
    }
    // console.log(timeTasks);

    setTasks(timeTasks);

    // *** hide colorTasks and show tasks
    setShowColorTasks(false);
  };

  // !!! dynamically add .active to buttons
  const addActiveClass = (para) => {
    // *** get all sorter buttons
    // *** [note: getElementsByClassName returns a collection of nodes, we use [0] to access the first and only node.]
    const sorter = document.getElementsByClassName("sorter")[0];
    const sorterBtns = sorter.getElementsByTagName("button");
    // console.log(sorterBtns);

    // *** remove current .active
    // *** [note: sorterBtns is an object, so we use Object.entries() to turn it into an array.]
    Object.entries(sorterBtns).forEach((btn) => {
      // console.log(btn[1]);
      btn[1].classList.remove("active");
    });

    // *** add .active to the chosen button
    // *** [note: getElementsByClassName returns a collection of nodes, we use [0] to access the first and only node.]
    const chosenBtn = document.getElementsByClassName(para)[0];
    // console.log(clickedBtn);
    chosenBtn.classList.add("active");
  };

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTaskForm(!showAddTaskForm)} />

      <Sorter getColorTasks={getColorTasks} getTimeTasks={getTimeTasks} />

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

      <section>
        <Tasks
          tasks={showColorTasks ? colorTasks : tasks}
          originalTasks={tasks}
          setColorTasks={setColorTasks}
          showColorTasks={showColorTasks}
          deleteTask={deleteTask}
          editTask={editTask}
          setTasks={setTasks}
        />

        <div className="msg-container">
          {showColorTasks && colorTasks.length <= 0 && (
            <p>
              <em className={colorRef.current}>No {colorRef.current} tasks.</em>
              <br />
              There are no {colorRef.current} tasks to be completed.
            </p>
          )}

          {!showColorTasks && tasks.length <= 0 && (
            <p>
              <em>Well done.</em>
              <br />
              There are no more tasks to be completed.
            </p>
          )}
        </div>
      </section>

      <Footer />
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
