import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForminscripcionRoutingModule } from './forminscripcion-routing.module';
import { ForminscripcionComponent } from './forminscripcion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';


@NgModule({
  declarations: [
    ForminscripcionComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ForminscripcionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ForminscripcionModule { }
