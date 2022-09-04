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
        <Route
          path="*"
          element={
            <div style={{ textAlign: "center", padding: "50px" }}>
              {" "}
              <h1 style={{ paddingBottom: "30px" }}>Ooops...</h1>
              <p>You seem to have come the wrong way.</p>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
