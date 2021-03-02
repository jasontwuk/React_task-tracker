import Header from "./components/Header";
import Tasks from "./components/Tasks";
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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
