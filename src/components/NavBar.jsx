import { Link } from "react-router-dom";
import "../css/NavBar.css";
import logo from "../assets/main-icon.png"
import Toggle from "../components/Toggle";
import { useTheme } from "../contexts/ThemeContext";

function NavBar() {
  const {isDark, setIsDark} = useTheme();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="movie app logo" className="logo" />
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/favorites" className="nav-link">
          Favorites
        </Link>
      </div>
      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />
    </nav>
  );
}

export default NavBar;