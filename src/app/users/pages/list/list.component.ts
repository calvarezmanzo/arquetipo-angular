import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  data: any[] = []

constructor(private apiRest: UsuariosService ){}


  ngOnInit(): void {

    this.llenarData()

  }
  
  llenarData(){
    this.apiRest.obtenerUsuarios().subscribe (data => {
      this.data = data.personas;

      console.log(this.data)
    })  }
  
}
