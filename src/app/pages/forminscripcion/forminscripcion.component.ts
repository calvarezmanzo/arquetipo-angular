
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-forminscripcion',
  templateUrl: './forminscripcion.component.html',
  styleUrls: ['./forminscripcion.component.css']
})
export class ForminscripcionComponent implements OnInit {
  formInscripcion!: FormGroup;
  personas: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private personaService: PersonaService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.listarPersonas();
  }

  initializeForm(): void {
    this.formInscripcion = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      Apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      Linkedin: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.formInscripcion.valid) {
      this.savePersona();
    } else {
      console.error('Formulario inválido');
    }
  }

  savePersona(): void {
    this.personaService.savePersona(this.formInscripcion.value).subscribe(
      response => {
        console.log('Persona guardada exitosamente', response);
        this.listarPersonas(); // Actualizar la lista de personas después de guardar una nueva
        this.formInscripcion.reset();
      },
      error => {
        console.error('Error guardando la persona', error);
      }
    );
  }

  listarPersonas(): void {
    this.personaService.listPersonas().subscribe(
      personas => {
        this.personas = personas;
        console.log('Lista de personas', this.personas);
      },
      error => {
        console.error('Error al listar las personas', error);
      }
    );
  }
}
