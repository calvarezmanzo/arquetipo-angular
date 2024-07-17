import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenServiceService } from 'src/app/services/token-service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  usuarios: any[] =[];

  constructor(
    private service: TokenServiceService,
    private router: Router
  ) { }

  nombre_usruario = localStorage.getItem('user');
  token = localStorage.getItem('token');

  ngOnInit(): void {
    this.nombre_usruario = this.service.getUsers().username;
    this.token = this.service.getToken() || '';
  }

  newUsuario(){
    this.router.navigate(['new']);
  }

}
