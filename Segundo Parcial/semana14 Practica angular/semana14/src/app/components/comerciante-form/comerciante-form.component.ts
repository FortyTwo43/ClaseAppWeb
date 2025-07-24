import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Comerciante } from '../../models/comerciante.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-comerciante-form',
  standalone: true,

  templateUrl: './comerciante-form.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./comerciante-form.component.css']
})
export class ComercianteFormComponent implements OnChanges {
  @Input() initialData?: Comerciante;
  @Output() submit = new EventEmitter<Partial<Comerciante>>();

  formData: Partial<Comerciante> = {
    nombre: '',
    email: '',
    telefono: '',
    direccion: '',
    habilitado: true
  };

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialData']) {
      if (this.initialData) {
        this.formData = { ...this.initialData };
      } else {
        this.formData = {
          nombre: '',
          email: '',
          telefono: '',
          direccion: '',
          habilitado: true
        };
      }
    }
  }

  handleSubmit() {
    this.submit.emit({ ...this.formData });
  }
}