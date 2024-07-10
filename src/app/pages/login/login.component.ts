import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!:FormGroup;
  errorMessage: string = "";

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      username:['',[Validators.required,Validators.minLength(3)]],  
      password:['',[Validators.required,Validators.minLength(5)]], 
    })
  }

  onSubmit():void {
    const formResult = this.formLogin.value;
    if(formResult.username == 'rodrigo' && formResult.password == '123456'){
      localStorage.setItem('loggued', 'verdad')
      this.router.navigate(['/welcome']);
    }else{
      this.errorMessage = 'El usuario y contrasenia no coinciden';
    }

  }

}
