import { Link } from "react-router-dom";
import { useGenres } from "../hooks/useMoviesByGenres";

const GenrePage = () => {

    const { data: genres, isLoading, isError } = useGenres();

    if (isLoading) {
        return <div className="text-center p-4">Loading genres...</div>;
    }

    if (isError) {
        return <div className="text-center p-4 text-danger">Error loading genres</div>;
    }

    if (!genres || !genres.genres.length) {
        return <div className="text-center p-4 text-warning">No genres found</div>;
    }


    return (
        <div className="movie-list-page">
            <title>Movie Genres</title>
            <h1 className="page-title">Movie Genres</h1>

            <div className="genre-grid">
                {genres.genres.map(genre => (
                    <Link to={`/genre/${genre.id}`} key={genre.id} className="genre-card-link">
                        <div className="genre-card">
                            <h3>{genre.name}</h3>
                            <div className="genre-arrow">→</div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default GenrePage
