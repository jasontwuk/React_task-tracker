import Task from "./Task";
import { useTransition, animated } from "react-spring";
import { useState, useRef } from "react";

const Tasks = ({
  showColorTasks,
  tasks,
  originalTasks,
  setColorTasks,
  deleteTask,
  editTask,
  setTasks,
}) => {
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

    // *** change .task-container cursor style to "grabbing" in a sync way
    setTimeout(() => {
      const items = document.getElementsByClassName("task-container");

      for (let item of items) {
        item.style.cursor = "grabbing";
      }
    }, 0);

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

    // *** make a deep copy of tasks
    let newTasks = JSON.parse(JSON.stringify(tasks));

    // *** when entered task (e.target) and dragged task (dragNode.current) are different...
    // *** [Note: it means the dragged task is hover other tasks]
    if (e.target !== dragNode.current) {
      // console.log("target is not the same");

      // *** get the hovered task's index
      let hoverTaskIndex = newTasks.findIndex((task) => task.id === params.id);
      // console.log(hoverTaskIndex);

      // *** get the dragged task's index
      let dragTaskIndex = newTasks.findIndex(
        (task) => task.id === dragTask.current.id
      );
      // console.log(dragTaskIndex);

      // *** innner splice(): get the dragged task and delete it from the newTasks
      // *** [Note: It returns an array, so use "[0]" to access the only item in this array]
      // *** outter splice(): insert the dragged task into the hovered task's position
      newTasks.splice(hoverTaskIndex, 0, newTasks.splice(dragTaskIndex, 1)[0]);
    }

    // *** call setColorTasks() to update colorTasks in App.js
    // *** [Note: this code can alter colorTasks, without it its swap effect won't show]
    setColorTasks(newTasks);

    // *** when showColorTasks is true (when a specific color tasks is chose)
    if (showColorTasks) {
      // *** get rest of the color tasks (except the chosen one)
      // *** [Note: newTasks is an array, use "[0]" to access the first item to represent the rest items (their color value are all the same)]
      const originalRestTasks = originalTasks.filter(
        (task) => task.color !== newTasks[0].color
      );
      // console.log(originalRestTasks);

      // *** update newTasks (newTasks + originalRestTasks)
      newTasks = [...newTasks, ...originalRestTasks];
      // console.log(newTasks);
    }

    // *** call setTasks() to update tasks in App.js
    setTasks(newTasks);
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

    // *** change .task-container cursor style to "grab" in a sync way
    setTimeout(() => {
      const items = document.getElementsByClassName("task-container");

      for (let item of items) {
        item.style.cursor = "grab";
      }
    }, 0);
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
    <div className="tasks-container">
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
    </div>
  );
};

export default Tasks;
