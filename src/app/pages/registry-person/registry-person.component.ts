import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CodigoAlfaServiceService } from 'src/app/services/codigo-alfa-service.service';

@Component({
  selector: 'app-registry-person',
  templateUrl: './registry-person.component.html',
  styleUrls: ['./registry-person.component.css']
})
export class RegistryPersonComponent implements OnInit {
  formPerson!: FormGroup;
  errorMessage : string = "";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: CodigoAlfaServiceService,
  ) { }

  ngOnInit(): void {
    this.formPerson = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      linkedin: ['', [Validators.required]],
    });
  }

  onSubmit():void {
    const formResult = this.formPerson.value;
    console.log(formResult);
    this.service.savePersona(formResult).subscribe(
      (data)=>{
        console.log(data)
        this.router.navigate(['/welcome'])
      },(error)=>{
        console.log(error)
      }
    );
  }
  cancel():void{
    this.router.navigate(['/welcome'])
  }

}
