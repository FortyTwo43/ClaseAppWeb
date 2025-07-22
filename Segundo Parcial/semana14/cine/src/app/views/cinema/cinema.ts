import { Component } from '@angular/core';
import IMovies from '../../../interfaces/IMovie';
import { MovieService } from '../../services/movie';
import { BillboardComponent } from '../../components/billboard/billboard';
import { MovieComponent } from '../../components/movie/movie';

@Component({
  selector: 'app-cinema',
  imports: [BillboardComponent, MovieComponent],
  templateUrl: './cinema.html',
  styleUrl: './cinema.css'
})
export class Cinema {
  movies: IMovies[] = [];

  constructor(private movieService: MovieService) {
    // Initialization logic can go here if needed
  }

  ngOnInit() {
    this.movies = this.movieService.getAllMovies();
  }

  selectMovie(movie: IMovies) {
    console.log('Selected movie:', movie);
    // You can add more logic here, like navigating to a details page or showing a modal
  }


}
