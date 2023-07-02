import React from "react";
import { useState } from "react";

export default function Item({ item }) {
  const [listItem, setListItem] = useState([]);
  const [editItem, setEditItem] = useState(false);
  const [content, setupdatedContent] = useState(item.Content);
  const [title, setNewTitle] = useState(item.Title);
  const [topic, setnewTopic] = useState(item.Topic);
  const [script, setNewScript] = useState(item.Script);

  function handleDelete() {
    fetch(`http://localhost:3000/Note/${item.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deleted) => setListItem(deleted));
  }
  function toggleEdit() {
    setEditItem(!editItem);
  }
  function handleUpdate(e) {
    e.preventDefault();
    fetch(`http://localhost:3000/Note/${item.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        {
          Topic: topic,
          Title: title,
          Content: content,
          Script: script,
        },
        setEditItem(!editItem)
      ),
      // .then((res) => res.json())
      // .then((updatedlist) => setListItem(updatedlist)),
    });
  }

  return !editItem ? (
    <section key={item.id}>
      <header>{item.Topic}</header>
      <title>{item.Title}</title>
      <p>{item.Content}</p>
      <h3>{item.Script}</h3>
      <span>
        <button style={{ background: "lightblue" }} onClick={toggleEdit}>
          edit
        </button>
        <button style={{ background: "lightblue" }} onClick={handleDelete}>
          delete
        </button>
      </span>
    </section>
  ) : (
    <form className="card-note" onSubmit={handleUpdate}>
      <label>
        Topic
        <select
          onChange={(e) => setnewTopic(e.target.value)}
          value={topic}
          name="Topic"
        >
          <option value="CSS">CSS</option>
          <option value="JS">JS</option>
          <option value="React">React</option>
        </select>
      </label>
      <label>
        Title
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={title}
          name="Title"
        />
      </label>
      <label>
        Content
        <textarea
          onChange={(e) => setupdatedContent(e.target.value)}
          value={content}
          name="Content"
        ></textarea>
      </label>
      <label>
        script
        <input onChange={(e) => setNewScript(e.target.value)} value={script} />
      </label>
      <button onClick={toggleEdit}>cancel</button>
      <button type="submit">update</button>
    </form>
  );
}
