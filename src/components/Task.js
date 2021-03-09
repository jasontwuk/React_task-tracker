import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask }) => {
  return (
    <div className="task">
      <h3>
        {task.text}
        <FaTimes onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.time}</p>
    </div>
  );
};

export default Task;
