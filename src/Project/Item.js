import React from "react";
import { useState } from "react";

export default function Item({ item }) {
  const [listItem, setListItem] = useState([]);

  function handleDelete() {
    fetch(`http://localhost:3000/Note/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((updated) => setListItem(updated));
  }
  return (
    <section key={item.id}>
      <header>{item.Topic}</header>
      <h1>{item.Title}</h1>
      <p>{item.Content}</p>
      <h1>{item.Script}</h1>
      <span>
        <button>edit</button>
        <button onClick={handleDelete}>delete</button>
      </span>
    </section>
  );
}
