import React from 'react';
import './MenuItem.css';

const MenuItem = ({ item, count, addToCart, removeFromCart }) => {
  return (
    <div className="menu-item">
      <img src={`images/${item.imageName}`} alt={item.title} className="menu-image" />
      <div className="details">
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
        <div className="price">${item.price.toFixed(2)}</div>
      </div>
      <div className="item-controls">
        <button onClick={removeFromCart} className="btn btn-outline-danger">-</button>
        <span className="item-count">{count}</span>
        <button onClick={addToCart} className="btn btn-outline-success">+</button>
      </div>
    </div>
  );
};

export default MenuItem;
