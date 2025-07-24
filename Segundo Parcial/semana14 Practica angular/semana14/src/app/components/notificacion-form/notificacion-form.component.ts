// Creado por Reyes Vinces Jeremy Daniel
import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Notificacion } from '../../models/notificacion.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificacion-form',
  standalone: true,
  templateUrl: './notificacion-form.component.html',
  styleUrls: ['./notificacion-form.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class NotificacionFormComponent implements OnChanges {
  @Input() notificacion?: Notificacion;
  @Output() submit = new EventEmitter<Partial<Notificacion>>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      titulo: [''],
      mensaje: [''],
      fecha_envio: [''],
      id_comerciante: [0]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['notificacion'] && this.notificacion) {
      this.form.patchValue(this.notificacion);
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.submit.emit(this.form.value);
    }
  }
}
