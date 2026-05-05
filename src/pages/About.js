function About() {
  return (
    <div style={styles.container}>
      <h1>About Us</h1>

      <p style={styles.text}>
        Delicious Bites is a modern restaurant web app built using React.
        We focus on fast service and great taste.
      </p>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "50px"
  },
  text: {
    fontSize: "18px",
    color: "#555"
  }
};

export default About;