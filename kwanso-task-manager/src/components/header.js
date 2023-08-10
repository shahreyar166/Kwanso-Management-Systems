import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="kw-header">
      <Link to="/" className="kw-header__link">
        Home
      </Link>
      <div className="kw-header__buttons">
        <Link to="/create-task" className="kw-header__button">
          Create
        </Link>
        <Link to="/list-tasks" className="kw-header__button">
          View
        </Link>
        <Link to="/bulk-delete" className="kw-header__button">
          Delete
        </Link>
      </div>
    </div>
  );
};

export default Header;
