import { useQuery } from "@tanstack/react-query"
import { getMovieDetails } from "../services/MovieAPI"

export const useMovie = (movieId: number) => {
    return useQuery({
        queryKey: ["film", movieId],
        queryFn: () => getMovieDetails(movieId),
    })
}