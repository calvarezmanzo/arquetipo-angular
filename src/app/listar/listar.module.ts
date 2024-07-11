import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ListarRoutingModule } from './listar-routing.module';
import { PersonasComponent } from './personas/personas.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PersonasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PersonasComponent }
    ]),
    SharedModule
  ]
})
export class ListarModule { }
