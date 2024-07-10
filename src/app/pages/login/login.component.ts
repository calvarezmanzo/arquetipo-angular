import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!:FormGroup;
  showAlert: boolean = false;
  alertMessage: string = '';
  alertType: string = 'success';

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name:['Nicolas',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]],  
      LastName:['Cababie',[Validators.required,Validators.minLength(3), Validators.maxLength(20)]], 
      Linkedin:['linkedin.com/in/cababie',[Validators.required]],
    })
  }

  onSubmit(){
    this.alertType = 'success';
    this.alertMessage = 'Welcome ' + this.form.value.Name + '!';
    this.showAlert = true;
    this.form.reset();
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
