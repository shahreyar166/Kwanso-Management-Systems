import React from "react";
import { Link } from "react-router-dom";
import Header from "./header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="kw-home">
        <div className="kw-home__welcome-section">
          <h1>Welcome to tasks</h1>
          <p>Your task management solution</p>
          <Link to="/list-tasks" className="kw-home__visit-list">
            View all tasks
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
