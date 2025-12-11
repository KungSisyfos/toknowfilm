import { useQuery } from "@tanstack/react-query"
import { getNowPlayingFilms, getPopularFilms, getTopRatedFilms } from "../services/MovieAPI"

export const usePopularFilms = () => {
    return useQuery({
        queryKey: ["popular-films"],
        queryFn: () => getPopularFilms(),
    });
};

export const useTopRatedFilms = () => {
    return useQuery({
        queryKey: ["top-rated-films"],
        queryFn: () => getTopRatedFilms(),
    });
};

export const useNowPlayingFilms= () => {
    return useQuery({
        queryKey: ["now-playing-films"],
        queryFn: () => getNowPlayingFilms(),
    });
};

