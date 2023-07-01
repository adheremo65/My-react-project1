import React, { useState } from "react";
import Form from "./Form";
import { useRef } from "react";
import "./Form.css";

export default function Header({ listItem }) {
  const [value, setValue] = useState("");
  const searchBar = (e) => {
    const barValue = e.target.value;
    console.log(barValue);
    setValue(barValue);
  };

  const dialogRef = useRef(null);
  function formHandler() {
    return dialogRef.current.showModal();
  }
  const onFormSubmitted = () => dialogRef.current.close();

  return (
    <div className="header">
      <br></br>
      <br></br>
      <img src="411485.jpg" alt="Simple Note Taking App"></img>
      <br></br>
      <br></br>
      <label>
        <input
          onChange={searchBar}
          type="text"
          name="search"
          placeholder="search"
          value={value}
        />
      </label>
      <label>
        <button onClick={formHandler}>ADD+</button>
      </label>
      <label>
        <button>save</button>
      </label>
      <dialog ref={dialogRef}>
        <Form onFormSubmitted={onFormSubmitted} />
      </dialog>
    </div>
  );
}
