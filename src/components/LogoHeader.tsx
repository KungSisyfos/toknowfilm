
import { Link } from "react-router-dom"
import { usePopularFilms } from "../hooks/useMovies"
import { useState, useEffect } from "react";
import { getImageUrl } from "../utils/imageUtil";

export const LogoHeader = () => {
  const [backdropIndex, setBackdropIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const { data: films } = usePopularFilms();

  const backdropImages = films?.results
    .filter(film => film.backdrop_path)
    .map(film => film.backdrop_path ? 
      `https://image.tmdb.org/t/p/original${film.backdrop_path}` : 
      getImageUrl(film.backdrop_path)
    ) || [];

  useEffect(() => {
    if (backdropImages.length === 0) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setBackdropIndex(prev => (prev + 1) % backdropImages.length);
        setIsTransitioning(false);
      }, 300);
      
    }, 3000);

    return () => clearInterval(interval);
  }, [backdropImages.length]);

  const currentBackdrop = backdropImages[backdropIndex];

  return (
    <div className="logo-header">

      {currentBackdrop && (
        <div 
          className="backdrop-background"
          style={{
            backgroundImage: `url(${currentBackdrop})`,
            opacity: isTransitioning ? 0 : 1,
          }}
        />
      )}
      
      <div className="logo-overlay">
        <Link to="/" style={{ textDecoration: 'none', cursor: 'pointer', color: 'white' }}>
          <div className="logo-container">
            <h1 className="logo">To <br /> Know <br />Film.</h1>
          </div>
        </Link>
      </div>
      
     
    </div>
  )
}