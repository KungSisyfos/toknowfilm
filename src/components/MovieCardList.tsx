import type { Movie } from "../services/MovieAPI.types";
import { getImageUrl } from "../utils/imageUtil";
import { Link } from "react-router-dom";

interface MovieCardListProps {
  film: Movie,
}
const MovieCardList: React.FC<MovieCardListProps> = ({ film }) => {

  return (
    <Link to={`/movie/${film.id}`}>
      <div className="movie card">
        <img
          src={getImageUrl(film.poster_path)}
          alt={film.title}
        />
        <p style={{ color: "black", textAlign: "center", marginTop: 3 }}>{film.title}</p>
      </div>
    </Link>
  )
}

export default MovieCardList
