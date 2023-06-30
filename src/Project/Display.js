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
      <header>{item.Topic}</header>
      <h1>{item.Title}</h1>
      <p>{item.Content}</p>
    </section>
  ));
  return <div>{items}</div>;
}
