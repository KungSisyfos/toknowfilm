import MovieCardList from "../components/MovieCardList";
import { useTopRatedFilms } from "../hooks/useMovies";

const TopRatedPage = () => {
  const { data: films, isLoading, isError } = useTopRatedFilms();

  if(isLoading){
    return <div className="text-center p-4">Loading...</div>
  }

  if(isError){
    return <div className="text-center p-4 text-danger">Error loading data</div>
  }
  return (
    <div className="movie-list-page">
      <h1 className="page-title">Top Rated Movies</h1>
      <title>Top Rated Movies</title>
      <div className="movies-container">
        {films && films.results.map(film => (
          <MovieCardList key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}

export default TopRatedPage
