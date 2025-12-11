export interface Movie {
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    character?: string;
}

export interface MovieDetails extends Movie {
    genres: Genre[];
    credits: {
        cast: Actor[];
    }
}

export type Genre = {
    id: number;
    name: string;
}

export interface MovieAPIResponse {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
}

export interface Actor {
    id: number;
    name: string;
    profile_path: string | null;
    known_for_department: string;
    
    character?: string;
    also_known_as?: string[];
    biography?: string | null;
    birthday?: string;
    deathday?: null;
    gender?: number;
    homepage?: string;
    imdb_id?: string;
    place_of_birth?: string;
    popularity?: number;
}

export interface ActorWithMovies extends Actor {
    movie_credits: {
        cast: Movie[];
    }
}

export interface ActorMovieCreditsResponse {
  id: number;
  cast: Movie[];
}



