import MovieCardList from "../components/MovieCardList";
import { useNowPlayingFilms } from "../hooks/useMovies"

const NowPlayingPage = () => {
  const { data: films, isLoading, isError } = useNowPlayingFilms();

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>
  }

  if (isError) {
    return <div className="text-center p-4 text-danger">Error loading data</div>
  }

  return (
    <div className="movie-list-page">
      <h1 className="page-title">Now Playing</h1>
      <title>Now Playing</title>
      <div className="movies-container">
        {films && films.results.map(film => (
          <MovieCardList key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}

export default NowPlayingPage
