import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Home from "./components/Home";
import Animated from "./components/Animated";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Navbar/> */}
      {/* <Gallery/> */}
      {/* <About/> */}
      <Animated />
      <Home />
    </>
  );
}

export default App;
