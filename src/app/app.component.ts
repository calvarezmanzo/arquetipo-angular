import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arquetipo';

  forma!:FormGroup;

  constructor(private fb:FormBuilder){
    this.crearFormulario()
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre:[""],
      apellido:[""],
      correo:[""],
      password1:[""],
      password2:[""]
    })
  }

  guardar(){
    console.log(this.forma);
  }

  limpiar(){
    this.forma.reset();
  }
}
