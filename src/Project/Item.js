import React from "react";

export default function Item({ item, handleDelete }) {
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
