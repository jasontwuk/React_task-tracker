const Sorter = ({ getColorTasks }) => {
  return (
    <div className="sorter">
      <ul>
        <li>
          <button className="all" onClick={() => getColorTasks("all")}>
            all
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
      </ul>
    </div>
  );
};

export default Sorter;
