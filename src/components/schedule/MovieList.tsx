import React from "react";

interface MovieListProps {
  movies: string[];
  selectedMovie: string;
  onSelectMovie: (movie: string) => void;
}

const MovieList: React.FC<MovieListProps> = ({ movies, selectedMovie, onSelectMovie }) => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div
          key={movie}
          className={`movie-item ${selectedMovie === movie ? "selected" : ""}`}
          onClick={() => onSelectMovie(movie)}
        >
          {movie}
        </div>
      ))}
    </div>
  );
};

export default MovieList;
