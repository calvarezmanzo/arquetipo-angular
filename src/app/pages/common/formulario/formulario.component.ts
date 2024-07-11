import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  formularioLogin!:FormGroup;
  listPersona$!: Observable<any>;
  


  constructor(
    private formBuilder: FormBuilder,  public dataService: DataService
  ) { }

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      Nombre:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],  
      Apellidos:['',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]], 
      URLLinkedin:['',[Validators.required]], 
    })
  }

  onSubmit(): void {
 
    this.dataService.getListPersona().subscribe(
      (data) => {
        console.log('Respuesta del servicio:', data);
        // Aquí puedes manejar la respuesta del servicio según sea necesario
      },
      (error) => {
        console.error('Error al llamar al servicio:', error);
        // Manejo de errores aquí
      }
    );
  }

}
