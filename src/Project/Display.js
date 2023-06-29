import React from "react";
import { useState, useEffect } from "react";
export default function Display() {
  const [listItem, setListItem] = useState([]);
  useEffect(() => {
    const list = () => {
      fetch("http://localhost:3000/Note").then((res) => res.json());
    };
    async function list() {
      const listData = await list();
      setListItem(listData);
    }
    list();
  }, []);

  return <div>{listItem}</div>;
}
