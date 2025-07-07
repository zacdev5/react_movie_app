import "./css/App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Toggle from "./components/Toggle";
import { MovieProvider } from "./contexts/MovieContext";
import { useState } from "react";

function App() {
  const [isDark, setDarkMode] = useState(false);

  return (
    <MovieProvider>
      <div data-theme={isDark && "dark"}>
        <Navbar />
        <Toggle 
          isChecked={isDark}
          handleChange={() => setDarkMode(!isDark)}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/favorites" element={<Favorites />}/>
          </Routes>
        </main>
      </div>
    </MovieProvider>
  );
}

export default App;
