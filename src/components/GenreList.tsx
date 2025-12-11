import { useGenres } from "../hooks/useMoviesByGenres";
import Dropdown from "react-bootstrap/Dropdown";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router-dom";

const GenreList = () => {
    const { data: genres } = useGenres();
    const { isDarkMode } = useTheme();

    if (!genres) {
        return;
    }

    return (
        <>
            <Dropdown> 
                <Dropdown.Toggle variant={isDarkMode ? "dark" : "light"} id="dropdown-basic">
                    Genres
                </Dropdown.Toggle>

                <Dropdown.Menu variant={isDarkMode ? "dark" : "light"}>
                    <Dropdown.Item as={Link} to={"/genres"}>View All Genres</Dropdown.Item>
                    {genres && (genres.genres.map(genre => (
                        <Dropdown.Item as={Link} to={`/genre/${genre.id}`} key={genre.id}>{genre.name}</Dropdown.Item>
                    )))}               
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}

export default GenreList
