import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'arquetipo';

  forma!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.crearFormulario();
  }

  crearFormulario() {
    this.forma = this.fb.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
      correo: ['', Validators.required],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  guardar() {
    console.log(this.forma);
  }

  limpiar() {
    this.forma.reset();
  }
}
