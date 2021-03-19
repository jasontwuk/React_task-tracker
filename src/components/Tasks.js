import Task from "./Task";

const Tasks = ({ tasks, deleteTask, editTask }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </>
  );
};

export default Tasks;
