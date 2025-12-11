import useTheme from "../hooks/useTheme";



const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className={isDarkMode ? "theme-toggle-btn bg-dark" : "theme-toggle-btn bg-light"}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? "🙈": "🙉"}
    </button>
  );
};

export default ThemeToggle;