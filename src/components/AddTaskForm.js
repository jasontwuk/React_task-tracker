import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddTaskForm = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState("Blue");

  useEffect(() => {
    // !!! focus on #input-task when component loaded
    const inputTask = document.getElementById("input-task");

    inputTask.focus();
  }, []);

  return (
    <div className="form-container">
      <FaTimes onClick={onAdd} />
      <form>
        <div className="form-input">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            id="input-task"
          />
        </div>
        <div className="form-input">
          <label>Time</label>
          <input
            type="text"
            placeholder="Add Day & Time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
        <div className="form-input">
          <label>Colour</label>
          <div className="radio-container">
            <input
              type="radio"
              value="Blue"
              name="colour"
              checked={color === "Blue"}
              onClick={() => setColor("Blue")}
            />
            <span className="radio-blue">Blue</span>
            <input
              type="radio"
              value="Pink"
              name="colour"
              checked={color === "Pink"}
              onClick={() => setColor("Pink")}
            />
            <span className="radio-pink">Pink</span>
            <input
              type="radio"
              value="Yellow"
              name="colour"
              checked={color === "Yellow"}
              onClick={() => setColor("Yellow")}
            />
            <span className="radio-yellow">Yellow</span>
            <input
              type="radio"
              value="Green"
              name="colour"
              checked={color === "Green"}
              onClick={() => setColor("Green")}
            />
            <span className="radio-green">Green</span>
            <input
              type="radio"
              value="Purple"
              name="colour"
              checked={color === "Purple"}
              onClick={() => setColor("Purple")}
            />
            <span className="radio-purple">Purple</span>
          </div>
        </div>
        <input type="submit" value="Save Task" />
      </form>
    </div>
  );
};

export default AddTaskForm;
