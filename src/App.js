import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/photo-website" element={<Home />} />
        <Route path="/photo-website/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
