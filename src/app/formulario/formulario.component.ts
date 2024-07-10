import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  name = new FormControl('', Validators.required);
  lastName = new FormControl('', Validators.required);
  link = new FormControl('',);

  constructor() { }

  ngOnInit(): void {
  }

}
