import React from 'react';
import './MenuItem.css';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ item }) => {
    return (
  <div className="menu-item">
    <img src={`images/${item.imageName}`} alt={item.title} className="menu-image" />
    <div className="details">
      <div className="title">{item.title}</div>
      <div className="description">{item.description}</div>
      <div className="price">{item.price}</div>
    </div>
    <button className="add-button">Add</button>
  </div>
    );
};

export default MenuItem;
