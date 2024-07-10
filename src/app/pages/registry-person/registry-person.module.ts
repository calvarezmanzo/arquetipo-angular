import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryPersonComponent } from './registry-person.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RegistryPersonComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RegistryPersonModule { }
