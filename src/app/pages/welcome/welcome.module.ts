import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class WelcomeModule { }
