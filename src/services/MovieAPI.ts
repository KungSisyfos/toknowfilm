import axios from "axios";
import * as Movie_Types from "./MovieAPI.types";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    timeout: 10000,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
    params: {
        api_key: API_KEY,
        include_adult: false,
    }
});

const get = async <T>(endpoint: string) => {
    try {
        const res = await instance.get<T>(endpoint);
        return res.data;
    } catch (error) {
        console.error("API error", error);   
    }
}

export const getPopularFilms = () => {
    return get<Movie_Types.MovieAPIResponse>("/movie/popular");
}

export const getTopRatedFilms = () => {
    return get<Movie_Types.MovieAPIResponse>("/movie/top_rated");
}

export const getNowPlayingFilms = () => {
    return get<Movie_Types.MovieAPIResponse>("/movie/now_playing");
}

export const getGenreList = () => {
    return get<{ genres: Movie_Types.Genre[] }>("/genre/movie/list");
}

export const getMoviesByGenre = async (
    genreId: number,
    pageNb = 1 
) => {
    return get<Movie_Types.MovieAPIResponse>(`/discover/movie?with_genres=${genreId}&page=${pageNb}`);
}

export const getMovieDetails = (movieId: number) => {
    return get<Movie_Types.MovieDetails>(`/movie/${movieId}?append_to_response=credits`);
}

export const getActorDetails = (actorId: number) => {
    return get<Movie_Types.ActorWithMovies>(`/person/${actorId}?append_to_response=movie_credits`);
}

export const getActorMovieCredits = (actorId: number) => {
    return get<Movie_Types.ActorMovieCreditsResponse>(`/person/${actorId}/movie_credits`);
}

