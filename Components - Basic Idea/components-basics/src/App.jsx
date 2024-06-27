import MovieList from "./components/MovieList.jsx";
import movies from "./assets/movies.js";
import "./App.css";
import Timer from "./components/Timer.jsx";




function App() {
  
  return (
    <div>
      <h1>My first dynamic React application</h1>
      <Timer startTime={5}/>
       <MovieList movies={movies} headingText="Movie List " />
    </div>
  );
}

export default App;
