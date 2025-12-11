import { useParams, useSearchParams } from "react-router-dom";
import { useGenres, useMoviesByGenre } from "../hooks/useMoviesByGenres";
import MovieCardList from "../components/MovieCardList";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";

const GenreMoviePage = () => {

  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageFromUrl = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(() => {
    return pageFromUrl ? Number(pageFromUrl) : 1
  });


  const genreId = Number(id);
  const { data: movies, isLoading, isError } = useMoviesByGenre(genreId, currentPage);
  const { data: genres } = useGenres();


  const genreName = genres?.genres.find(genre => genre.id === genreId)?.name;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearchParams({page: page.toString() });
  }

  useEffect(() => {
    const pageFromUrl = searchParams.get("page");
    const newPage = pageFromUrl ? Number(pageFromUrl) : 1;
    
    if(newPage > 0) {
    setCurrentPage(newPage)
  }
  }, [searchParams])

  if(isLoading){
    return <p className="text-center p-4">Loading {genreName} movies...</p>;
  }

  if(isError) {
    return <p className="text-center p-4 text-danger">Error loading genre.</p>;
  }

  if(!id){
    return <p className="text-center p-4 text-danger">Invaild genre ID</p>;
  }

  if(!movies){
    return <p className="text-center p-4 text-warning">No {genreName} movies was found</p>;
  }  

  return (
    <div className="movie-list-page">
        <title>{genreName}</title>
        <h1 className="page-title">{genreName} Movies</h1>

        <div className="movies-container">
          {movies.results.map(film => (
            <MovieCardList key={film.id} film={film} />
          ))}
        </div>

        <Pagination currentPage={currentPage} totalPages={movies?.total_pages} onPageChange={handlePageChange}/>
    </div>
  )
}

export default GenreMoviePage
