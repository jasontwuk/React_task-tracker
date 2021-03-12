import { FaTimes } from "react-icons/fa";

const Task = ({ task, deleteTask }) => {
  return (
    <div className={`task ` + task.color}>
      <h3>
        {task.name}
        <FaTimes onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.time}</p>
    </div>
  );
};

export default Task;
