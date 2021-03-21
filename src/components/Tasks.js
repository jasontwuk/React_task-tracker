import Task from "./Task";
import { useTransition, animated } from "react-spring";

const Tasks = ({ tasks, deleteTask, editTask }) => {
  const transition = useTransition(tasks, (tasks) => tasks.id, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    leave: { opacity: 0, marginLeft: 100, marginRight: -100 },
  });

  return (
    <>
      {transition.map(({ item, key, props }) => (
        <animated.div key={key} style={props} className="task-container">
          <Task task={item} deleteTask={deleteTask} editTask={editTask} />
        </animated.div>
      ))}
    </>
  );
};

export default Tasks;
