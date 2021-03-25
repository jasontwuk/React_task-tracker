import { FaTimes } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

const Task = ({ task, deleteTask, editTask }) => {
  return (
    <div className={`task ` + task.color}>
      <div className="task-name-container">
        <h3>{task.name}</h3>
        <FaTimes onClick={() => deleteTask(task.id)} />
      </div>

      <div className="task-time-container">
        <span>{task.time}</span>
        <HiPencilAlt onClick={() => editTask(task.id)} />
      </div>
    </div>
  );
};

export default Task;
