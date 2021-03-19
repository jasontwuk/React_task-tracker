import { FaTimes } from "react-icons/fa";
import { HiPencilAlt } from "react-icons/hi";

const Task = ({ task, deleteTask, editTask }) => {
  return (
    <div className={`task ` + task.color}>
      <h3>
        {task.name}
        <FaTimes onClick={() => deleteTask(task.id)} />
      </h3>
      <span>
        {task.time}
        <HiPencilAlt onClick={() => editTask(task.id)} />
      </span>
    </div>
  );
};

export default Task;
