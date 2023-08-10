import React, { useState, useEffect } from "react";
import Header from "./header";

const BulkDelete = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("taskData")) || [];
    setTasks(storedTasks);
  }, []);

  const handleCheckboxChange = (taskId) => {
    if (selectedTasks.includes(taskId)) {
      setSelectedTasks(selectedTasks.filter((id) => id !== taskId));
    } else {
      setSelectedTasks([...selectedTasks, taskId]);
    }
  };

  const handleDeleteClick = () => {
    const updatedTasks = tasks.filter(
      (task) => !selectedTasks.includes(task.id)
    );
    setTasks(updatedTasks);
    setSelectedTasks([]);
    localStorage.setItem("taskData", JSON.stringify(updatedTasks));
  };

  return (
    <>
      <Header />
      {tasks && tasks.length > 0 ? (
        <>
          <div className="kw-list__heading">
            <button
              className="kw-list__delete-button"
              onClick={handleDeleteClick}
            >
              Delete Selected
            </button>
          </div>
          <ul className="kw-list__list">
            {tasks.map((task) => (
              <li key={task.id} className="kw-list__list-item">
                <div className="kw-list__checkbox">
                  <p>Select to delete</p>
                  <input
                    type="checkbox"
                    checked={selectedTasks.includes(task.id)}
                    onChange={() => handleCheckboxChange(task.id)}
                  />
                </div>
                <p className="kw-list__name-tag">Name: {task.name}</p>
                <p className="kw-list__desc-tag">
                  Description: {task.description}
                </p>
                {task.description}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className="kw-task__empty">
            <p>No tasks added yet!</p>
          </div>
        </>
      )}
    </>
  );
};

export default BulkDelete;
