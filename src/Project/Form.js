import React from "react";
import "./Form.css";

export default function Form({ onFormSubmitted }) {
  const dataHandler = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    fetch("http://localhost:3000/Note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((submitedInfo) => onFormSubmitted(submitedInfo));
  };
  return (
    <form onSubmit={dataHandler}>
      <div style={{ background: "darkgreen" }} className="note-card">
        <label>
          Topic
          <select className="note-card-topic" name="Topic">
            <option>CSS</option>
            <option>JS</option>
            <option>React</option>
          </select>
        </label>
        <br />
        <label>
          Title
          <input
            className="note-card-title"
            type="text"
            placeholder="Title"
            name="Title"
          />
        </label>
        <br />
        <label>
          Content
          <br></br>
          <textarea
            className="note-card__textarea"
            type="text"
            placeholder="add your note here"
            name="Content"
          ></textarea>
        </label>
        <br />
        <label>
          Link
          <input type="text" name="Script" href="" />
        </label>
      </div>
      <button type="submit">save</button>
    </form>
  );
}
