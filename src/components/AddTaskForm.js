import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const AddTaskForm = ({ onAdd, saveTask }) => {
  const [name, setName] = useState("");
  const [time, setTime] = useState("");
  const [color, setColor] = useState("Blue");
  const [successMsg, setSuccessMsg] = useState(false);

  useEffect(() => {
    // !!! focus on #input-task when component loaded
    const inputTask = document.getElementById("input-task");

    inputTask.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    // *** check if the task is empty
    if (!name) {
      alert("Please add a task.");
      return;
    }

    saveTask({ name, time, color });

    // *** clear the form
    setName("");
    setTime("");
    setColor("Blue");

    // *** show success message
    setSuccessMsg(true);
  };

  return (
    <div className="form-container">
      <FaTimes onClick={onAdd} />

      <form onSubmit={onSubmit}>
        <div className="form-input">
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              onChange={() => setColor("Blue")}
            />
            <span className="radio-blue">Blue</span>
            <input
              type="radio"
              value="Pink"
              name="colour"
              checked={color === "Pink"}
              onChange={() => setColor("Pink")}
            />
            <span className="radio-pink">Pink</span>
            <input
              type="radio"
              value="Yellow"
              name="colour"
              checked={color === "Yellow"}
              onChange={() => setColor("Yellow")}
            />
            <span className="radio-yellow">Yellow</span>
            <input
              type="radio"
              value="Green"
              name="colour"
              checked={color === "Green"}
              onChange={() => setColor("Green")}
            />
            <span className="radio-green">Green</span>
            <input
              type="radio"
              value="Purple"
              name="colour"
              checked={color === "Purple"}
              onChange={() => setColor("Purple")}
            />
            <span className="radio-purple">Purple</span>
          </div>
        </div>

        <input type="submit" value="Save Task" />

        {successMsg && (
          <p>
            <em>Task added.</em>
            <br />
            Please add another one or close this window to go back to your task
            list.
          </p>
        )}
      </form>
    </div>
  );
};

export default AddTaskForm;
