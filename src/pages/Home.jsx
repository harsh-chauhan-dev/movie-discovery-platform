import MovieCard from "../components/MovieCard.jsx";
import { useEffect, useState } from "react";
import "../style/Home.css";
import { getPopularMovies, searchMovies } from "../services/api.js";
function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopulerMovie = async () => {
      try {
        const populerMovie = await getPopularMovies();
        setMovie(populerMovie);
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadPopulerMovie();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    if (loading) return;
    setLoading(true);
    try {
      const searchResult = await searchMovies(search);
      setMovie(searchResult);
      setError(null);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div className="home">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Search for movies.... "
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="search-button">
            {" "}
            Search
          </button>
        </form>
        {error && <div className="error-message">Something went wrong!</div>}
        {loading ? (
          <div className="loading">Loading...</div>
        ) : (
          <div className="movies-grid">
            {movies.map(movie=>(
                  <MovieCard movie={movie} key={movie.id} />
                ))}
          </div>
        )}
      </div>
    </>
  );
}
export default Home;
