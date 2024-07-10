import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
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
      linkedin: ['', [Validators.required]],
    });
  }

  guardar() {
    if (this.formulario.valid) {
      const usuario = {
        Nombre: this.formulario.value.nombre,
        Apellido: this.formulario.value.apellido,
        Linkedin: this.formulario.value.linkedin
      };

      this.usuarioService.guardarUsuario(usuario).subscribe(
        response => {
          console.log('Usuario guardado correctamente:', response);
        },
        error => {
          console.error('Error al guardar el usuario:', error);
        }
      );
    } else {
      console.error('El formulario no es válido. Verifica los campos.');
    }
  }

  limpiar() {
    this.formulario.reset();
  }
}
