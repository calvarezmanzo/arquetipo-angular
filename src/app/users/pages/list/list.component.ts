import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  constructor(private usuariosService: UsuariosService) {
    this.usuariosService.obtenerUsuarios().subscribe((resp) => {
      console.log(resp);
    });
  }

  ngOnInit(): void {}
  
}
