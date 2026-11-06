
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 className="title tap">Delicious Bites 🍔</h2>

      <div style={styles.links}>
        <Link className="nav-item" to="/">Home</Link>
        <Link className="nav-item" to="/menu">Menu</Link>
        <Link className="nav-item" to="/services">Services</Link>
        <Link className="nav-item" to="/about">About</Link>
        <Link className="nav-item" to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 25px",
    background: "#1f5068",
    flexWrap: "wrap"
  },
  links: {
    display: "flex",
    flexWrap: "wrap",
    gap: "15px"
  }
};

export default Navbar;
