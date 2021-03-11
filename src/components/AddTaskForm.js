import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";

const AddTaskForm = ({ onAdd }) => {
  useEffect(() => {
    // !!!!!!!! SELECT ITEMS !!!!!!!!
    const addTask = document.getElementById("addTask");

    addTask.focus();
  }, []);

  return (
    <div className="form-container">
      <FaTimes onClick={onAdd} />
      <form>
        <div className="form-input">
          <label>Task</label>
          <input type="text" placeholder="Add Task" id="addTask" />
        </div>
        <div className="form-input">
          <label>Time</label>
          <input type="text" placeholder="Add Day & Time" />
        </div>
        <div className="form-input">
          <label>Colour</label>
          <div className="radio-container">
            <input type="radio" value="Blue" name="colour" />
            <span className="radio-blue">Blue</span>
            <input type="radio" value="Pink" name="colour" />
            <span className="radio-pink">Pink</span>
            <input type="radio" value="Yellow" name="colour" />
            <span className="radio-yellow">Yellow</span>
            <input type="radio" value="Green" name="colour" />
            <span className="radio-green">Green</span>
            <input type="radio" value="Purple" name="colour" />
            <span className="radio-purple">Purple</span>
          </div>
        </div>
        <input type="submit" value="Save Task" />
      </form>
    </div>
  );
};

export default AddTaskForm;
