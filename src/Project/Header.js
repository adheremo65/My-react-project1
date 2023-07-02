import React, { useState } from "react";
import Form from "./Form";
import { useRef } from "react";
import "./Form.css";
import NoteLogo from "./NoteLogo.jpg";
import { useEffect } from "react";
import Item from "./Item";

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
  }, [listItem]);

  const [value, setValue] = useState("");
  const searchBar = (e) => {
    const barValue = e.target.value;

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

  const items = filteditems.map((item) => <Item item={item} key={item.id} />);

  return (
    <div className="form">
      <br></br>
      <img
        className="center"
        style={{ width: "50px" }}
        src={NoteLogo}
        alt="Simple Note Taking App"
      ></img>
      <br></br>
      <header>Short-Note-Taking-APP</header>
      <br></br>
      <span>
        <label>
          <input
            className="flex"
            onChange={searchBar}
            type="text"
            name="search"
            placeholder="search"
            value={value}
          />
        </label>
        <label>
          <button className="flex" onClick={formHandler}>
            ADD+
          </button>
        </label>
      </span>
      <dialog ref={dialogRef}>
        <Form onFormSubmitted={onFormSubmitted} />
      </dialog>
      {items}
    </div>
  );
}
