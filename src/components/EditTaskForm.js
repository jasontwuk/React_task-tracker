import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditTaskForm = ({ onEdit, saveEditTask, clickedTask }) => {
  const id = clickedTask.id;
  const [name, setName] = useState(clickedTask.name);
  const [startDate, setStartDate] = useState(new Date(clickedTask.time));
  const [color, setColor] = useState(clickedTask.color);

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

    // *** get #date-picker's input value, then set it to "time" property
    const datePicker = document.getElementById("date-picker");
    const time = datePicker.value;

    // *** call saveEditTask
    saveEditTask({ id, name, time, color });
  };

  return (
    <div className="form-container">
      <div className="title-container">
        <h3>Edit Task</h3>
      </div>

      <FaTimes onClick={onEdit} />

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
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            timeCaption="time"
            dateFormat="d MMM yyyy h:mm aa"
            id="date-picker"
          />
        </div>

        <div className="form-input">
          <label>Colour</label>
          <div className="radio-container">
            <input
              type="radio"
              value="blue"
              name="colour"
              checked={color === "blue"}
              onChange={() => setColor("blue")}
            />
            <span className="radio-blue">Blue</span>
            <input
              type="radio"
              value="pink"
              name="colour"
              checked={color === "pink"}
              onChange={() => setColor("pink")}
            />
            <span className="radio-pink">Pink</span>
            <input
              type="radio"
              value="yellow"
              name="colour"
              checked={color === "yellow"}
              onChange={() => setColor("yellow")}
            />
            <span className="radio-yellow">Yellow</span>
            <input
              type="radio"
              value="green"
              name="colour"
              checked={color === "green"}
              onChange={() => setColor("green")}
            />
            <span className="radio-green">Green</span>
            <input
              type="radio"
              value="purple"
              name="colour"
              checked={color === "purple"}
              onChange={() => setColor("purple")}
            />
            <span className="radio-purple">Purple</span>
          </div>
        </div>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default EditTaskForm;
