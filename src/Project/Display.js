import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";

import "./Form.css";
export default function Display() {
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
  function handleDelete() {
    fetch(`http://localhost:3000/Note/${items.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((updated) => console.log(updated));
  }
  const items = listItem.map((item) => (
    <Item handleDelete={handleDelete} item={item} key={item.id} />
  ));

  return <div className="center">{items}</div>;
}
