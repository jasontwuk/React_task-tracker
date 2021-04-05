import { FaCalendarAlt } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

const Sorter = ({ getColorTasks, getTimeTasks }) => {
  return (
    <div className="sorter">
      <ul>
        <li>
          <button className="all active" onClick={() => getColorTasks("all")}>
            <span>all</span>
          </button>
        </li>
        <li>
          <button className="blue" onClick={() => getColorTasks("blue")}>
            &nbsp;
          </button>
        </li>
        <li>
          <button className="pink" onClick={() => getColorTasks("pink")}>
            &nbsp;
          </button>
        </li>
        <li>
          <button className="yellow" onClick={() => getColorTasks("yellow")}>
            &nbsp;
          </button>
        </li>
        <li>
          <button className="green" onClick={() => getColorTasks("green")}>
            &nbsp;
          </button>
        </li>
        <li>
          <button className="purple" onClick={() => getColorTasks("purple")}>
            &nbsp;
          </button>
        </li>
        <li className="vertical-bar">&nbsp;</li>
        <li>
          <FaCalendarAlt />
        </li>
        <li>
          <button className="time-up" onClick={() => getTimeTasks("time-up")}>
            <FaAngleUp />
          </button>
        </li>
        <li>
          <button
            className="time-down"
            onClick={() => getTimeTasks("time-down")}
          >
            <FaAngleDown />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sorter;
