import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TaskData from "./taskdata";
import Header from "./header";

const ListTask = () => {
  const [data, setData] = useState([]);
  //only rendered one time, when component is mounted
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("taskData"));
    setData(savedData);
  }, []);

  return (
    <>
      <Header />
      <div className="kw-task">
        {data && data.length > 0 ? (
          <TaskData tasks={data} />
        ) : (
          <div className="kw-task__empty">
            <p>No tasks added yet!</p>
            <Link to="/create-task" className="kw-task__create-button">
              Create a Task
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default ListTask;
