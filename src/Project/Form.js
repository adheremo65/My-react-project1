import React from "react";
import "./Form.css";
import { useState } from "react";

export default function Form() {
  const dataHandler = (event) => {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));
    fetch("http://localhost:3000/Note", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
  };
  return (
    <form onSubmit={dataHandler}>
      <div className="form">
        <label>
          Topic
          <input type="text" name="Topic/" />
        </label>
        <label>
          Title
          <input type="text" placeholder="" name="Title" />
        </label>
        <label>
          Content
          <textarea></textarea>
        </label>
        <label>
          <label htmlFor="imageUpload">Upload Image:</label>
          <input
            type="file"
            id="imageUpload"
            name="imageUpload"
            accept="image/*"
          />
        </label>
      </div>
      <button type="submit">save</button>
    </form>
  );
}
