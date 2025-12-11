import useLocalStorage from "../hooks/useLocalStorage";
import { ThemeContext } from "./ThemeContext";


interface ThemeContextProviderProps {
	children: React.ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
	const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>("TKF_darkmode", true);

	const toggleTheme = () => {
		const newValue = !isDarkMode;
		setIsDarkMode(newValue);
	}

	return (
		<ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeContextProvider;
