import { Route, Routes } from "react-router";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import PopularPage from './pages/PopularPage';
import TopRatedPage from './pages/TopRatedPage';
import NowPlayingPage from './pages/NowPlayingPage';
import GenreMoviePage from './pages/GenreMoviePage'
import '../src/assets/scss/App.scss'
import HomePage from "./pages/HomePage";
import Navigation from "./components/Navigation";
import useTheme from "./hooks/useTheme";
import FilmPage from "./pages/MoviePage";
import { LogoHeader } from "./components/LogoHeader";

import ActorPage from "./pages/ActorPage";
import GenrePage from "./pages/GenrePage";


function App() {
  const { isDarkMode } = useTheme();


  return (
  
    <div id="App" className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <LogoHeader />
      <Navigation />

      <Routes>
        <Route path="/" element={<HomePage />}/>
        
        <Route path="/popular" element={<PopularPage />}/>
        <Route path="/top-rated" element={<TopRatedPage />}/>
        <Route path="/now-playing" element={<NowPlayingPage />} />
        <Route path="/movie/:id" element={<FilmPage /> } />
        <Route path="/genres" element={<GenrePage />}/>
        <Route path="/genre/:id" element={<GenreMoviePage />}/>
        <Route path="/person/:id" element={<ActorPage />}/>
      </Routes>

      <ReactQueryDevtools />
    </div>
  )
}

export default App
