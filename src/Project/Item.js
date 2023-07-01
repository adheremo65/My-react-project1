import React from "react";
import { useState } from "react";

export default function Item({ item }) {
  const [listItem, setListItem] = useState([]);
  const [editItem, setEditItem] = useState(false);

  function handleDelete() {
    fetch(`http://localhost:3000/Note/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((updated) => setListItem(updated));
  }
  function toggleEdit() {
    setEditItem(!editItem);
  }

  return !editItem ? (
    <section key={item.id}>
      <header>{item.Topic}</header>
      <h1>{item.Title}</h1>
      <p>{item.Content}</p>
      <h1>{item.Script}</h1>
      <span>
        <button onClick={toggleEdit}>edit</button>
        <button onClick={handleDelete}>delete</button>
      </span>
    </section>
  ) : (
    <form>
      <label>
        Topic
        <input name="Topic"></input>
      </label>
      <label>
        Title
        <input name="Title"></input>
      </label>
      <label>
        Content
        <textarea name="Content"></textarea>
      </label>
      <button onClick={toggleEdit}>cancel</button>
      <button>update</button>
    </form>
  );
}
