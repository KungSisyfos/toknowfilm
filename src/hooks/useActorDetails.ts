import { useQuery } from "@tanstack/react-query";
import { getActorDetails } from "../services/MovieAPI";

const useActorDetails = (actorId: number) => {
    return useQuery({
        queryKey: ["actor-details", actorId ],
        queryFn: () => getActorDetails(actorId),
    })
}

export default useActorDetails;