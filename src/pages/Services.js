
const services = [
  {
    icon: "🚚",
    title: "Fast Delivery",
    description: "Fresh meals delivered right to your doorstep."
  },
  {
    icon: "🍽️",
    title: "Dine In",
    description: "Enjoy delicious food in a comfortable restaurant."
  },
  {
    icon: "🥡",
    title: "Takeaway",
    description: "Order your favorite meals and pick them up."
  },
  {
    icon: "🎉",
    title: "Catering",
    description: "Delicious food for parties and special events."
  }
];

function Services() {
  return (
    <div style={styles.page}>
      <h1>Our Services 🍔</h1>
      <p>Discover what Delicious Bites has to offer!</p>

      <div style={styles.container}>
        {services.map((service) => (
          <div key={service.title} style={styles.card}>
            <h1>{service.icon}</h1>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    textAlign: "center",
    padding: "40px 20px"
  },
  container: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "30px"
  },
  card: {
    flex: "1 1 220px",
    maxWidth: "280px",
    padding: "25px",
    background: "#f4f4f4",
    borderRadius: "12px",
    boxShadow: "0 0 8px rgba(0,0,0,0.15)"
  }
};

export default Services;
