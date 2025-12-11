import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";
import ThemeToggle from "./ThemeToggle";
import useTheme from "../hooks/useTheme";
import GenreList from "./GenreList";
import Dropdown from "react-bootstrap/Dropdown";

const Navigation = () => {
	const { isDarkMode } = useTheme()
	return (
		<Navbar variant={isDarkMode ? "dark" : "light"} expand="md" className={isDarkMode ? "bg-dark" : "bg-light"}>
			<Container>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link as={NavLink} end to="/">Home</Nav.Link>
						<Dropdown>
							<Dropdown.Toggle variant={isDarkMode ? "dark": "light"} id="dropdown-basic">
								Categories
							</Dropdown.Toggle>

							<Dropdown.Menu className={isDarkMode ? "bg-dark" : "bg-light"}>
								<Dropdown.Item>
									<Nav.Link as={NavLink} end to="/popular">Popular Films</Nav.Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Nav.Link as={NavLink} end to="/top-rated">Top Rated Films</Nav.Link>
								</Dropdown.Item>
								<Dropdown.Item>
									<Nav.Link as={NavLink} end to="/now-playing">Now Playing</Nav.Link>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						
						<GenreList />
						<ThemeToggle />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation;