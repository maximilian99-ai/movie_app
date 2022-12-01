import { useEffect, useState } from "react";
import MovieDetail from "../components/MovieDetail";

function Detail() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://yts-proxy.now.sh/list_movies.json?sort_by=rating")
    ).json();
    setMovies(json.data.movies)
  };
  useEffect(() => {
    getMovies();
  }, [])
  return (
    <div className="movies">
      {movies.map(movie => (
      <MovieDetail
        key={movie.id}
        id={movie.id} 
        year={movie.year} 
        title={movie.title} 
        summary={movie.summary}
        poster={movie.large_cover_image}
        genres={movie.genres}
      />
    ))}
    </div>
  )
}

export default Detail;