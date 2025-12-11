import { useQuery } from "@tanstack/react-query"
import { getActorMovieCredits } from "../services/MovieAPI"

export const useActorMovieCredits = (actorId: number) => {
    return useQuery({
        queryKey: ["actorMovieCredits", actorId ],
        queryFn: () => getActorMovieCredits(actorId),
    })
}