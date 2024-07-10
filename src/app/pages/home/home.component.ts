import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  formularioEjemplo!: FormGroup;

  // Nombre,Apellido,RUT
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formularioEjemplo = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.minLength(20)]],
      Apellido: ['', [Validators.required, Validators.minLength(20)]],
      Rut: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.formularioEjemplo = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.maxLength(20)]],
      // Apellido: ['', [Validators.required, Validators.maxLength(20)]],
      // Rut: ['', [Validators.required]],
    });
    console.log(this.formularioEjemplo);
  }
}
