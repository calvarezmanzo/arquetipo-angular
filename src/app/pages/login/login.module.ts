import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormularioComponent } from '../common/formulario/formulario.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [FormularioComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: FormularioComponent } // Configura la ruta para el formulario aquí
    ]),
    SharedModule
  ]
})
export class LoginModule { }
