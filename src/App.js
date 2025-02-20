import { useState } from 'react';
import './App.css';
import MenuItem from './components/MenuItem';
import 'bootstrap/dist/css/bootstrap.min.css';

const menuItems = [
  { id: 1, title: 'Gyoza', description: 'Japanese dumplings', imageName: 'gyoza.png', price: 5.99 },
  { id: 2, title: 'Sushi', description: 'Japanese rice rolls', imageName: 'sushi.png', price: 6.99 },
  { id: 3, title: 'Ramen', description: 'Japanese noodle soup', imageName: 'ramen.png', price: 7.99 },
  { id: 4, title: 'Matcha Cake', description: 'Japanese green tea cake', imageName: 'matcha-cake.png', price: 4.99 },
  { id: 5, title: 'Mochi', description: 'Japanese rice cake', imageName: 'mochi.png', price: 3.99 },
  { id: 6, title: 'Yakitori', description: 'Japanese skewered chicken', imageName: 'yakitori.png', price: 2.99 },
  { id: 7, title: 'Takoyaki', description: 'Japanese octopus balls', imageName: 'takoyaki.png', price: 5.99 },
  { id: 8, title: 'Sashimi', description: 'Japanese raw fish', imageName: 'sashimi.png', price: 8.99 },
  { id: 9, title: 'Okonomiyaki', description: 'Japanese savory pancake', imageName: 'okonomiyaki.png', price: 6.99 },
  { id: 10, title: 'Katsu Curry', description: 'Japanese curry with fried pork', imageName: 'katsu-curry.png', price: 9.99 }
];

function App() {
  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    setCart((prevCart) => ({ ...prevCart, [id]: (prevCart[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      if (!prevCart[id]) return prevCart;
      const updatedCart = { ...prevCart };
      updatedCart[id] -= 1;
      if (updatedCart[id] <= 0) delete updatedCart[id];
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart({});
  };

  const placeOrder = () => {
    if (Object.keys(cart).length === 0) {
      alert('No items in cart');
      return;
    }
    let orderSummary = 'Order placed:\n';
    menuItems.forEach((item) => {
      if (cart[item.id]) {
        orderSummary += `${item.title}: ${cart[item.id]}\n`;
      }
    });
    orderSummary += `Total: $${calculateTotal().toFixed(2)}`;
    alert(orderSummary);
    clearCart();
  };

  const calculateTotal = () => {
    return menuItems.reduce((total, item) => {
      return total + (cart[item.id] || 0) * item.price;
    }, 0);
  };

  return (
    <div className="container">
      <img src="images/logo.jpeg" alt="Restaurant Logo" className="logo" />
      <div className="slogan">
        <div className="primary">Authentic Japanese Cuisine</div>
        <div className="secondary">Freshly Made, Just for You</div>
      </div>
      <div className="menu">
        {menuItems.map((item) => (
          <MenuItem 
            key={item.id} 
            item={item} 
            count={cart[item.id] || 0} 
            addToCart={() => addToCart(item.id)} 
            removeFromCart={() => removeFromCart(item.id)} 
          />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <button onClick={clearCart} className="btn btn-danger">Clear All</button>
        <button onClick={placeOrder} className="btn btn-success">Order</button>
      </div>
    </div>
  );
}

export default App;
