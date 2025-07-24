import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Comerciante } from '../../models/comerciante.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comerciante-card',
  standalone: true,
  templateUrl: './comerciante-card.component.html',
  styleUrls: ['./comerciante-card.component.css'],
  imports: [CommonModule]
})
export class ComercianteCardComponent {
  @Input() comerciante!: Comerciante;
  @Output() edit = new EventEmitter<Comerciante>();
  @Output() delete = new EventEmitter<number>();

  onEdit() {
    this.edit.emit(this.comerciante);
  }

  onDelete() {
    this.delete.emit(this.comerciante.id_comerciante);
  }
}
