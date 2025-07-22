import { Component, Input, Output, EventEmitter } from '@angular/core';
import IMovie from '../../../interfaces/IMovie'


@Component({
  selector: 'app-movie',
  imports: [],
  standalone: true,
  templateUrl: './movie.html',
  styleUrl: './movie.css'
})
export class MovieComponent {
  @Input() movie: IMovie = {
    id: 0,
    title: '',
    description: '',
    posterUrl: ''
  };

  @Output() movieSelected = new EventEmitter<IMovie>();

  onMovieSelected() {
    this.movieSelected.emit(this.movie);
  }
  constructor() {  }

}
