import { Link } from "react-router-dom";
import type { Actor, ActorMovieCreditsResponse } from "../services/MovieAPI.types";
import { getImageUrl } from "../utils/imageUtil";
interface ActorProfileProps {
  actor: Actor,
  credits?: ActorMovieCreditsResponse;
}
const ActorProfile: React.FC<ActorProfileProps> = ({ actor, credits }) => {

  const profilePicture = getImageUrl(actor.profile_path);

  return (
    <div className="actor-container">
      <title>{actor.name}</title>
      <div className="general-info">
        <h1 className="actor-name">{actor.name}</h1>
        <div className="birth-death">
          <h2 className="actor-birthday">Born:{actor.birthday} </h2>
          {actor.deathday && (<h2 className="actor-deathday">- Died: {actor.deathday}</h2>)}
        </div>
        <h3 className="pob">Place of birth: {actor.place_of_birth}</h3>

      </div>
      <div className="actor">
        <div className="actor-overview">
          <img src={profilePicture} alt={actor.name} className="actor-image" />

          <div className="actor-biography">
            <h2>Biography: </h2>
            {actor.biography}
          </div>
        </div>

        <div className="actor-description">

          <div className="filmography">
            <h2>Known For:</h2>
            <div className="movies-grid">
              {credits && (credits.cast.slice(0, 10)?.map(movie =>
                <Link key={movie.id} to={`/movie/${movie.id}`} className="movie-link">
                  <img 
                    src={getImageUrl(movie.poster_path)} 
                    alt={movie.title}
                    className="movie-poster"
                  />
                  <p>{movie.title}</p>
                </Link>
              ))}
            </div>
          </div>

        </div>


      </div>

    </div>
  )
}

export default ActorProfile
