import { Link } from "react-router-dom"

const CategoryCards = () => {
  return (
    <div className="homepage-container">
      <title>To Know Film</title>
      
      <Link to="/popular"  style={{ textDecoration: 'none'}}>
        <div className="home popular">
          <h2>Popular</h2>
        </div>
      </Link>
      <Link to="/now-playing" style={{ textDecoration: 'none'}}>
        <div className="home now-playing">
          <h2>Now Playing</h2>
        </div>
      </Link>
      <Link to="/top-rated" style={{ textDecoration: 'none'}}>
        <div className="home top-rated">
          <h2>Top Rated</h2>
        </div>
      </Link>

    </div>
  )
}

export default CategoryCards
