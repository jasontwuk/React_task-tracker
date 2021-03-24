import Task from "./Task";
import { useTransition, animated } from "react-spring";
import { useState, useRef } from "react";

const Tasks = ({ tasks, deleteTask, editTask, setTasks }) => {
  // !!! for react-spring animation
  const transition = useTransition(tasks, (task) => task.id, {
    from: { opacity: 0, marginLeft: -200, marginRight: 200 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0 },
    leave: { opacity: 0, marginLeft: 300, marginRight: -300 },
    config: { duration: 250 },
  });

  // !!! for drag and drop feature
  const [dragging, setDragging] = useState(false);

  const dragTask = useRef();
  const dragNode = useRef();

  const handleDragStart = (e, params) => {
    // console.log("drag starting..", params);

    // *** set values
    dragTask.current = params;
    dragNode.current = e.target;

    // *** add event listener on the dragged task (when drag end, call handleDragEnd)
    dragNode.current.addEventListener("dragend", handleDragEnd);

    // *** apply the .current-dragging in a sync way, so when we drag an item, its background will turn grey (looks like a shadow) and the item that we are dragging will still maintain the same look.
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  const handleDragEnter = (e, params) => {
    // console.log("Entering drag..", params);
    // console.log(e.target);
    // console.log(dragNode.current);

    // *** when entered task (e.target) and dragged task (dragNode.current) are different...
    // *** [Note: it means the dragged task is hover other tasks]
    if (e.target !== dragNode.current) {
      // console.log("target is not the same");

      // *** make a deep copy of tasks
      let newTasks = JSON.parse(JSON.stringify(tasks));

      // *** get the hovered task's index
      let hoverTaskIndex = newTasks.findIndex((task) => task.id === params.id);
      // console.log(hoverIndex);

      // *** get the dragged task's index
      let dragTaskIndex = newTasks.findIndex(
        (task) => task.id === dragTask.current.id
      );
      // console.log(currentTaskIndex);

      // *** innner splice(): get the dragged task and delete it from the newTasks
      // *** [Note: It returns an array, so use "[0]" to access the only item in this array]
      // *** outter splice(): insert the dragged task into the hovered task's position
      newTasks.splice(hoverTaskIndex, 0, newTasks.splice(dragTaskIndex, 1)[0]);
      // console.log(newTasks);

      // *** call setTasks() to update tasks in App.js
      setTasks(newTasks);
    }
  };

  const handleDragEnd = () => {
    // console.log("ending drag..");

    // *** set dragging to false
    setDragging(false);

    // *** remove handleDragEnd eventListener
    dragNode.current.removeEventListener("dragend", handleDragEnd);

    // *** reset values
    dragTask.current = null;
    dragNode.current = null;
  };

  const getStyles = (params) => {
    const currentItem = dragTask.current;
    // console.log(params);
    // console.log(currentItem);

    // *** add .current-dragging to the dragging task
    if (params.id === currentItem.id) {
      return "current-dragging task-container";
    }
    return "task-container";
  };

  return (
    <>
      {transition.map(({ item, key, props }) => (
        <animated.div
          key={key}
          style={props}
          draggable
          onDragStart={(e) => {
            handleDragStart(e, item);
          }}
          className={dragging ? getStyles(item) : "task-container"}
          onDragEnter={
            dragging
              ? (e) => {
                  handleDragEnter(e, item);
                }
              : null
          }
        >
          <Task task={item} deleteTask={deleteTask} editTask={editTask} />
        </animated.div>
      ))}
    </>
  );
};

export default Tasks;
