import { Link, useParams } from "react-router-dom";
import { useMovie } from "../hooks/useMovieDetails";
import { getImageUrl } from "../utils/imageUtil";

const MoviePage = () => {
  const { id } = useParams();
  const movieId = Number(id);
  const { data: movie, isLoading, isError } = useMovie(movieId);

  if (isError) {
    return <div className="text-center p-4 text-danger">Error loading movie details</div>;
  }
  if (isLoading) {
    return <div className="text-center p-4">Loading movie details...</div>;
  }
  if (!id) {
    return <div className="text-center p-4 text-danger">Invalid movie ID</div>;
  }

  if (!movie) {
    return <div className="text-center p-4">No movie was found</div>;

  }

  const poster = getImageUrl(movie.poster_path);
  return (
    <div className="movie-container">
      <title>{movie.title}</title>

      <div className="movie-poster-title">
        <img src={poster} alt={movie.title} />
        <div className="movie-description">
          <h1>{movie.title}</h1>
          <div className="movie-overview">
            <h2>Overview:</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>

      <div className="movie-info">
        <h2>Cast:</h2>

        <div className="cast-section">
          <div className="cast-grid">
            {movie.credits.cast.slice(0, 20).map(actor => (
              <Link key={actor.id} to={`/person/${actor.id}`} style={{ textDecoration: "none" }}>
                <div className="cast-member">
                  <img src={getImageUrl(actor.profile_path)} alt={actor.name} />
                  
                  <div className="cast-character">
                    <p>Name: {actor.name}:</p>
                    <p>Character: {actor.character}</p>
                  </div>

                </div>
              </Link>

            ))}
          </div>
        </div>

      </div>

    </div>




  )
}

export default MoviePage
