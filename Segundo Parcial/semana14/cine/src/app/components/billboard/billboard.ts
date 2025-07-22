import { Component, Input, Output, EventEmitter } from '@angular/core';
import IMovie from '../../../interfaces/IMovie'


@Component({
  selector: 'app-billboard',
  imports: [],
  templateUrl: './billboard.html',
  styleUrl: './billboard.css'
})
export class BillboardComponent {
  @Input() movies: IMovie[] = [];
  @Output() movieSelected = new EventEmitter<IMovie>();
  
  constructor() { 
    // Initialization logic can go here if needed
  }


}
