import React, { useState } from "react";
import Form from "./Form";
import { useRef } from "react";
import "./Form.css";
import Display from "./Display";

export default function Header({ listItem,value,searchBar }) {

  // const [value, setValue] = useState("");
  // const searchBar = (e) => {
  //   const barValue = e.target.value;
  //   console.log(barValue);
  //   setValue(barValue);
  // };

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
