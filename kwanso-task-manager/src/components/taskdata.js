import React from "react";

const TaskData = ({ tasks }) => {
  return (
    <div>
      {tasks && tasks.length > 0 ? (
        <ul className="kw-list__list">
          {tasks.map((task) => (
            <li key={task.id} className="kw-list__list-item">
              <p className="kw-list__name-tag">Name: {task.name}</p>
              <p className="kw-list__desc-tag">
                Description: {task.description}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks available.</p>
      )}
    </div>
  );
};

export default TaskData;
