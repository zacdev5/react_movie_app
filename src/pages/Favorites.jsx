import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Favorites() {
  const { favorites } = useMovieContext();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredFavorites = favorites.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="favorites">
      <h2>Your Favorites</h2>

      {/* Show search input only if there are favorite movies */}
      {favorites.length > 0 && (
        <div className="filter">
          <input
            type="text"
            placeholder="Filter favorites..."
            value={searchQuery} // This input is "controlled" by the searchQuery state
            onChange={(e) => setSearchQuery(e.target.value)} // Updates state as user types
            className="filter-input"
          />
        </div>
      )}

      {/* Show filtered movie list if any match the query */}
      {filteredFavorites.length > 0 ? (
        <div className="movies-grid">
          {filteredFavorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      ) : favorites.length > 0 ? (
        // If there are favorites but none match the filter, show a message
        <p>No matches found.</p>
      ) : (
        // If there are no favorites at all, show the empty state
        <div className="favorites-empty">
          <h2>No Favorite Movies Yet</h2>
          <p>Start adding movies to your favorites and they will appear here!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;
