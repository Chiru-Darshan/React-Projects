import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <h3 onDoubleClick={() => onToggle(task.Id)}>
        {" "}
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.Id)}
        />{" "}
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
