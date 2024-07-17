import { Component, OnInit } from '@angular/core';
import { TokenServiceService } from 'src/app/services/token-service.service';
import { UsuariosLogin } from 'src/app/interfaces/usuarios';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngresarServiceService } from 'src/app/services/ingresar-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  private Usuario_data!: UsuariosLogin;

  constructor(
    private formBuilder: FormBuilder,
    private service: TokenServiceService,
    private _loginService : IngresarServiceService,
    private router: Router
  ) { }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      nombre_usruario: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(5)]],
    })
  }

  ngOnInit(): void {
    this.buildForm();
  }

  onSubmit(){
    this._loginService.submitIngreso(this.Usuario_data).subscribe(
      data => {
        this.service.saveTokens(data.token);
        this.router.navigate(['home']);
      },
      error => {
        console.log(error);
      }
    )
  }

}
