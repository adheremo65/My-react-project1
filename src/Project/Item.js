import React from "react";

export default function Item({ item }) {
  return (
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
  );
}