import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comerciante } from '../../models/comerciante.model';
import { ComercianteCardComponent } from '../comerciante-card/comerciante-card.component';

@Component({
  selector: 'app-comerciante-list',
  standalone: true,
  imports: [CommonModule, ComercianteCardComponent],
  templateUrl: './comerciante-list.component.html',
  styleUrls: ['./comerciante-list.component.css']
})
export class ComercianteListComponent {
  @Input() comerciantes: Comerciante[] = [];
  @Output() edit = new EventEmitter<Comerciante>();
  @Output() delete = new EventEmitter<number>();

  handleEdit(comerciante: Comerciante) {
    this.edit.emit(comerciante);
  }

  handleDelete(id: number) {
    this.delete.emit(id);
  }
}
