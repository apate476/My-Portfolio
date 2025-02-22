import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Game from "./components/Game";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route
          path="/"
          element={
            <div className="bg-gradient-to-br from-[#1a0b2e] via-[#1f0f37] to-[#2a1352] min-h-screen p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(106,49,182,0.1),transparent_50%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(142,53,240,0.15),transparent_50%)]" />
              <div className="relative z-10">
                <Navbar />
                <Hero />
                <Projects />
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
