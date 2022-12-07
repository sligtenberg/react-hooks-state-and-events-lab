import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [dark, setMode] = useState(false);

  const appClass = dark ? "App dark" : "App light"
  const buttonText = dark ? "Dark Mode" : "Light Mode"

  function handleModeChange() {
    setMode(dark => !dark)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleModeChange}>{buttonText}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
