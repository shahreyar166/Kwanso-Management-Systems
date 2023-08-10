import React, { useState } from "react";
import Header from "./header";

const TaskForm = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);

  const handleSaveClick = () => {
    if (name.trim() === "" || description.trim() === "") {
      setError("Name and description cannot be empty.");
      return;
    }

    setError(null);

    const existingData = JSON.parse(localStorage.getItem("taskData")) || [];
    const newTask = { id: Date.now(), name, description };
    const updatedData = [...existingData, newTask];
    localStorage.setItem("taskData", JSON.stringify(updatedData));

    setName("");
    setDescription("");
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Header />
      <div className="kw-form__container">
        <form className="kw-form__section">
          <h2>Add New Task</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="kw-form__input"
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              className="kw-form__textarea"
            />
          </div>
          {error && <p className="kw-form__error-message">{error}</p>}
          <button
            type="button"
            onClick={handleSaveClick}
            className="kw-form__save-button"
          >
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
