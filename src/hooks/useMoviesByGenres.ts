import { useQuery } from "@tanstack/react-query";
import { getGenreList, getMoviesByGenre } from "../services/MovieAPI";


export const useGenres = () => {
    return useQuery({
        queryKey: ["genres"],
        queryFn: () => getGenreList(),
    });
}
export const useMoviesByGenre = (genreId: number, page = 1) => {
    return useQuery({
        queryKey: ["movies-by-genre", genreId, page],
        queryFn: () => getMoviesByGenre(genreId, page),
    });
}




