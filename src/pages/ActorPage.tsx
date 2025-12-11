import { useParams } from "react-router-dom";
import useActorDetails from "../hooks/useActorDetails"
import ActorProfile from "../components/ActorProfile";
import { useActorMovieCredits } from "../hooks/useActorMovieCredits";

const ActorPage = () => {
  const { id } = useParams();
  const actorId = Number(id);
  const { data: actor, isLoading: actorLoading, isError} = useActorDetails(actorId);
  const { data: credits, isLoading: creditsLoading } = useActorMovieCredits(actorId);

  if(!id) {
    return <div className="text-center p-4 text-danger">Invalid Actor ID</div>
  }
  if(!actor){
    return <div className="text-center p-4 text-danger"> Could not find the actor you where looking for</div>
  }

  if(!credits){
    return <div className="text-center p-4 text-danger">No credits with this actor</div>
  }

  if(actorLoading || creditsLoading){
    return <div className="text-center p-4">Loading actor details...</div>
  }

  if(isError){
    return <div className="text-center p-4 text-danger">Error loading actor details.</div>
  }

  return (
    <div>
      <ActorProfile actor={actor} credits={credits}/>
      
    </div>
  )
}

export default ActorPage
