import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})

export class FormularioComponent implements OnInit {
  formularioLogin!:FormGroup;

  constructor(
    private formBuilder: FormBuilder,  public dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      Nombre:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],  
      Apellidos:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]], 
      URLLinkedin:['',[Validators.required]], 
    })
  }

  onSubmit(): void {
 
    if (this.formularioLogin.valid) {
      const nombre = this.formularioLogin.get('Nombre')!.value;
      const apellidos = this.formularioLogin.get('Apellidos')!.value;
      const urlLinkedin = this.formularioLogin.get('URLLinkedin')!.value;

      const usuario = {
        Nombre: nombre,
        Apellido: apellidos,
        Linkedin: urlLinkedin
      };

      // Llamar al servicio para insertar los datos
      this.dataService.savePerson(usuario).subscribe(
          response => {
              console.log('Datos insertados correctamente:', response);
              // Aquí podrías agregar lógica adicional como mostrar un mensaje de éxito, redirigir, etc.
          },
          error => {
              console.error('Error al insertar datos:', error);
              // Manejo de errores: mostrar mensaje al usuario, registrar en un log, etc.
          }
      );
  } else {
    alert('¡Alerta! No haz completado los datos de forma correcta.');// Formulario inválido, manejar según tus requerimientos (mostrar mensajes, etc.)
  }
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

}
