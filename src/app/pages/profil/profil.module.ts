import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilComponent } from './profil.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfilComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ProfilModule { }
