import { useState } from "react";

const items = [
  { id: 1, name: "Burger", price: 10 },
  { id: 2, name: "Pizza", price: 15 },
  { id: 3, name: "Pasta", price: 12 },
  { id: 4, name: "Fries", price: 6 }
];

function Menu() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={styles.page}>
      <h1>Our Menu 🍽️</h1>

      <div style={styles.container}>
        {items.map((item) => (
          <div key={item.id} style={styles.card}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>

            <button style={styles.button} onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div style={styles.cart}>
        <h2>Cart 🛒</h2>

        {cart.length === 0 ? (
          <p>No items yet</p>
        ) : (
          cart.map((item, i) => (
            <p key={i}>
              {item.name} - ${item.price}
            </p>
          ))
        )}

        <h3>Total: ${total}</h3>
      </div>
    </div>
  );
}

const styles = {
  page: {
    textAlign: "center",
    padding: "20px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px"
  },
  card: {
    width: "160px",
    padding: "20px",
    background: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 0 8px rgba(0,0,0,0.2)"
  },
  button: {
    marginTop: "10px",
    padding: "6px 10px",
    background: "#1f5068",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "6px"
  },
  cart: {
    marginTop: "30px"
  }
};

export default Menu;