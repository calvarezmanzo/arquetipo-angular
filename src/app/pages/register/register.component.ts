import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IngresarServiceService } from 'src/app/services/ingresar-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  formPersona!: FormGroup;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _loginService : IngresarServiceService
  ) { }

  ngOnInit(): void {
    this.formPersona = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      linkedin: ['', [Validators.required]],
    });
  }

  onSubmit(){
    const resultadoDel_form = this.formPersona.value;
    console.log('EL FORMULARIO ES: ', resultadoDel_form);
    this._loginService.saveIngreso(resultadoDel_form).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['login']);
      },
      (error) => {
        console.log(error);
        this.errorMessage = error;
      }
    )
  }

}
