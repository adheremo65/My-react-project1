import Header from "./Project/Header";
import Display from "./Project/Display";
import React from "react";
function App({ listItem }) {
  return (
    <div>
      <Header />
      <Display listItem={listItem} />
    </div>
  );
}

export default App;
