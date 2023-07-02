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

  const items = listItem.map((item) => <Item item={item} key={item.id} />);

  return (
    <div style={{ background: "darkgreen" }} className="note-card">
      {items}
    </div>
  );
}
