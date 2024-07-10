import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formulario!:FormGroup;
  constructor( private formBuilder:FormBuilder) { 
    
  }

  ngOnInit(): void {
    this.formulario=this.formBuilder.group({
      nombre: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      apellido: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      linkedin: [
        '',
        [
          Validators.required,
        ],
      ],
    })
  }


  guardar() {
    console.log(this.formulario);
  }

  limpiar() {
    this.formulario.reset();
  }
}
