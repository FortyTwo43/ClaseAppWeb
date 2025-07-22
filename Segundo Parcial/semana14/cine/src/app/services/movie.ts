import { Injectable } from '@angular/core';
import IMovie from '../../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: IMovie[] = [
    {
      id: 1,
      title: 'Inception',
      description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
      posterUrl: 'https://example.com/inception.jpg'
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
      posterUrl: 'https://example.com/matrix.jpg'
    }
    // Add more movies as needed
  ];

  constructor() { }

  // Example method to get a movie by ID
  getMovieById(id: number): IMovie | null {
    // This is just a placeholder. In a real application, you would fetch the movie from an API or database.
    return null;
  }
  // Example method to get all movies
  getAllMovies(): IMovie[] {
    return this.movies;
  }

  // Example method to add a new movie
  addMovie(movie: IMovie): void {
    this.movies.push(movie);
  }

  // Example method to update a movie
  updateMovie(updatedMovie: IMovie): void {
    const index = this.movies.findIndex(movie => movie.id === updatedMovie.id);
    if (index !== -1) {
      this.movies[index] = updatedMovie;
    }
  }
}
