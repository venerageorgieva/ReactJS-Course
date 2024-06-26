import Movie from "./Movie.jsx";
import Heading from "./Heading.jsx";

export default function MovieList(props){
    return (
        <div className="movie-list">
   
   <Heading>Some heading here</Heading>

        <h2>{props.headingText}</h2>
        <ul>
    <li><Movie data={props.movies[0]} /></li>
    <li><Movie data={props.movies[1]} /></li>
    <li><Movie data={props.movies[2]} /></li>
    <li><Movie data={props.movies[3]} /></li>

        </ul>
        </div>
  
    );
}