import React, { useState } from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false)

  function handleAddToCart() {
    setIsInCart(isInCart => !isInCart)
  }

  const itemClass = isInCart ? "in-cart" : ""
  const itemButtonText = isInCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>{itemButtonText}</button>
    </li>
  );
}

export default Item;
