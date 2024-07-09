import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SavePersonaGuard } from './guards/save-persona.guard';

const routes: Routes = [
  {
    path: 'home2',
    component:HomeComponent
  },
  {
    path:'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'login2',
    loadChildren :() => import('./pages/login2/login2.module').then(m => m.Login2Module),
    canActivate: [ SavePersonaGuard ]
  }
  ,
  {
    path: 'forminscripcion',
    loadChildren :() => import('./pages/forminscripcion/forminscripcion.module').then(m => m.ForminscripcionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
