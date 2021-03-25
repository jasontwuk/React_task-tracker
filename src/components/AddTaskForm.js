import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddTaskForm = ({ onAdd, saveTask }) => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [color, setColor] = useState("blue");

  useEffect(() => {
    // !!! focus on #input-task when component loaded
    const inputTask = document.getElementById("input-task");

    inputTask.focus();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    // *** check if the task is empty
    if (!name) {
      alert("Please enter a task name.");
      return;
    }

    // *** get #date-picker's input value, then set it to "time" property
    const datePicker = document.getElementById("date-picker");
    const time = datePicker.value;

    // *** call saveTask
    saveTask({ name, time, color });

    // *** clear the form
    setName("");
    setColor("blue");
  };

  return (
    <div className="form-container">
      <div className="title-container">
        <h3>Add Task</h3>
      </div>

      <FaTimes onClick={onAdd} />

      <form onSubmit={onSubmit}>
        <div className="form-input">
          <label>Name</label>
          <input
            type="text"
            placeholder="Enter Task Name"
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
              id="blue"
              value="blue"
              name="colour"
              checked={color === "blue"}
              onChange={() => setColor("blue")}
            />
            <label htmlFor="blue" className="radio-blue">
              Blue
            </label>
            <input
              type="radio"
              id="pink"
              value="pink"
              name="colour"
              checked={color === "pink"}
              onChange={() => setColor("pink")}
            />
            <label htmlFor="pink" className="radio-pink">
              Pink
            </label>
            <input
              type="radio"
              id="yellow"
              value="yellow"
              name="colour"
              checked={color === "yellow"}
              onChange={() => setColor("yellow")}
            />
            <label htmlFor="yellow" className="radio-yellow">
              Yellow
            </label>
            <input
              type="radio"
              id="green"
              value="green"
              name="colour"
              checked={color === "green"}
              onChange={() => setColor("green")}
            />
            <label htmlFor="green" className="radio-green">
              Green
            </label>
            <input
              type="radio"
              id="purple"
              value="purple"
              name="colour"
              checked={color === "purple"}
              onChange={() => setColor("purple")}
            />
            <label htmlFor="purple" className="radio-purple">
              Purple
            </label>
          </div>
        </div>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default AddTaskForm;
