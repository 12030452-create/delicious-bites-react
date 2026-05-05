import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to Delicious Bites 🍔</h1>

      <p style={styles.text}>
        Fresh food, fast delivery, and the best taste in town.
      </p>

      <button style={styles.button} onClick={() => navigate("/menu")}>
        Order Now
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "70px 20px"
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },
  text: {
    fontSize: "18px",
    color: "#555"
  },
  button: {
    marginTop: "20px",
    padding: "12px 25px",
    background: "#1f5068",
    color: "white",
    border: "none",
    cursor: "pointer",
    borderRadius: "8px"
  }
};

export default Home;