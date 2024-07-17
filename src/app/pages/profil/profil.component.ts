import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngresarServiceService } from 'src/app/services/ingresar-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  usuarios: any[] =[];

  constructor(
    private service: IngresarServiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.saveIngreso(localStorage.getItem('user')).subscribe(data => {
      this.usuarios = data;
    },
    error => {
      console.log(error);
    });
  }

  newUsuario(){
    this.router.navigate(['new']);
  }

}
