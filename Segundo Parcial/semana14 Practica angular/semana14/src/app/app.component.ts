import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'semana14';

  constructor(private router: Router) {}

  navigateToIncidencia() {
    this.router.navigate(['/incidencia']);
  }

  navigateToComerciant() {
    this.router.navigate(['/comerciante']);
  }

  navigateToNotificacion() {
    this.router.navigate(['/notificacion']);
  }
}
