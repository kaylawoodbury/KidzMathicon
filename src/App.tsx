import React from "react";
import "./App.css";
import landscape from "./images/image1.png";

function App() {
  return (
    <div className="App" style={styles.background}>
      <div style={styles.container}>
        <p style={styles.title}>Welcome to KidzMathicon</p>
      </div>
      <button>Start</button>
      <a href="https://www.vecteezy.com/free-vector/nature">
        Nature Vectors by Vecteezy
      </a>
    </div>
  );
}

export default App;
const styles = {
  background: {
    backgroundImage: `url(${landscape})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
  },
  title: {
    color: "#FAFF02",
    fontSize: 55,
    fontFamily: "Chalkduster",
  },
  container: {
    backgroundColor: "#f8d5e2",
  },
};

// <a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/landscape">Landscape Vectors by Vecteezy</a>
// <a href="https://www.vecteezy.com/free-vector/nature">Nature Vectors by Vecteezy</a>yarn
