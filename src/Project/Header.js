import React, { useState } from "react";
import Form from "./Form";
import { useRef } from "react";
import "./Form.css";
import NoteLogo from "./NoteLogo.jpg";
import { useEffect } from "react";

export default function Header() {
  const [listItem, setListItem] = useState([]);

  useEffect(() => {
    const output = () =>
      fetch("http://localhost:3000/Note").then((res) => res.json());
    async function list() {
      const listData = await output();
      setListItem(listData);
    }
    list();
  }, []);

  const [value, setValue] = useState("");
  const searchBar = (e) => {
    const barValue = e.target.value;
    console.log(barValue);
    setValue(barValue);
  };
  const filteditems = listItem.filter((item) =>
    item.Title.toLowerCase().includes(value.toLowerCase())
  );

  const dialogRef = useRef(null);
  function formHandler() {
    return dialogRef.current.showModal();
  }
  const onFormSubmitted = () => dialogRef.current.close();

  const items = filteditems.map((item) => (
    <section key={item.id}>
      <header>{item.Topic}</header>
      <h1>{item.Title}</h1>
      <p>{item.Content}</p>
      <h1>{item.Script}</h1>
      <span>
        <button>edit</button>
        <button>delete</button>
      </span>
    </section>
  ));

  return (
    <div className="form">
      <br></br>
      <br></br>
      <img
        className="center"
        style={{ width: "50px" }}
        src={NoteLogo}
        alt="Simple Note Taking App"
      ></img>
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
      {items}
    </div>
  );
}
