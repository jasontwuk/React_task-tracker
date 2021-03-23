import Task from "./Task";
import { useTransition, animated } from "react-spring";

const Tasks = ({ tasks, deleteTask, editTask }) => {
  const transition = useTransition(tasks, (task) => task.id, {
    from: { opacity: 0, marginLeft: -200, marginRight: 200 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    leave: { opacity: 0, marginLeft: 300, marginRight: -300 },
    config: { duration: 250 },
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
