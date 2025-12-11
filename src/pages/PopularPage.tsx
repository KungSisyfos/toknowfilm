import MovieCardList from "../components/MovieCardList";
import { usePopularFilms } from "../hooks/useMovies"


const PopularPage = () => {

  const { data: films, isLoading, isError } = usePopularFilms();
  
    if(isLoading){
      return <div className="text-center p-4">Loading...</div>
    }
  
    if(isError){
      return <div className="text-center p-4 text-danger">Error loading data</div>
    }
    
  return (
    <div className="movie-list-page">
      <h1 className="page-title">Popular Movies</h1>
      <title>Popular Movies</title>
      <div className="movies-container">
        {films && films.results.map(film => (
          <MovieCardList key={film.id} film={film} />
        ))}
      </div>
    </div>
  )
}

export default PopularPage
