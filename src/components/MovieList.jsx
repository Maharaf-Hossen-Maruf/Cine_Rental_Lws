import { getAllMovies } from "../data/movies";
import Movie_Card from "./Movie_Card";


export default function MovieList() {
  const movies = getAllMovies();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
         <Movie_Card key={movie.id} movie={movie}/>
        ))}
      </div>
    </div>
  );
}
