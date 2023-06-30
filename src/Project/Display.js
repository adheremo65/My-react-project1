import React from "react";
import { useState, useEffect } from "react";
export default function Display() {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    const list = () => {
      const fetch = () =>
        fetch("http://localhost:3000/Note").then((res) => res.json());

      async function list() {
        const listData = await fetch();
        setListItem(listData);
      }
      list();
    };
  }, []);
  const items = listItem.map((item) => (
    <section>
      <header>{item.Topic}</header>
      <h1>{item.Title}</h1>
    </section>
  ));
  return <div>{items}</div>;
}
