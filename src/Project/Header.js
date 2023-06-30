import React from "react";
import Form from "./Form";
import { useRef } from "react";
import "./Form.css";

export default function Header() {
  const searchBar = (e) => {
    const barValue = e.target.value;
    console.log(barValue);
    return barValue;
  };

  const dialogRef = useRef(null);
  function formHandler() {
    return dialogRef.current.showModal();
  }
  const onFormSubmitted = () => dialogRef.current.close();

  return (
    <div className="header">
      <p>Simple Note Taking App</p>
      <label>
        <input
          onChange={searchBar}
          type="text"
          name="search"
          placeholder="search"
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
