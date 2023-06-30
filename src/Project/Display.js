import React from "react";
import { useState, useEffect } from "react";
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
  });

  const items = listItem.map((item) => (
    <section key={item.id}>
      <header>{item.Title}</header>
      <h1>{item.Topic}</h1>
    </section>
  ));
  return <div>{items}</div>;
}
