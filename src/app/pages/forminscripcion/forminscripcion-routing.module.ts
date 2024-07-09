import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForminscripcionComponent } from './forminscripcion.component';

const routes: Routes = [
  {
    path : '',
    component : ForminscripcionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForminscripcionRoutingModule { }
