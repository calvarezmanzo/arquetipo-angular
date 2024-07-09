import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.css']
})
export class Login2Component implements OnInit {
  login!:FormGroup

  constructor( private formBuilder: FormBuilder) { 
  }

  ngOnInit(): void {
    this.login = this.formBuilder.group({
      Username: ['', [Validators.required]],
      Password: ['', [Validators.required]]
    })
  }

  onSubmit(){
    console.log(this.login.value);
  }

}
