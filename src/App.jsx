import "./css/App.css";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { Routes, Route } from "react-router-dom";
import Toggle from "./components/Toggle";
import { MovieProvider } from "./contexts/MovieContext";
import { useTheme } from "./contexts/ThemeContext";

function App() {
  const {isDark, setIsDark} = useTheme();

  return (
    <MovieProvider>
      <Navbar />
      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
