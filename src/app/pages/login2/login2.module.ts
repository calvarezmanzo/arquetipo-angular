import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Login2RoutingModule } from './login2-routing.module';
import { Login2Component } from './login2.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Login2Component
  ],
  imports: [
    CommonModule,
    Login2RoutingModule,
    ReactiveFormsModule
  ]
})
export class Login2Module { }
