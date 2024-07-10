import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SesionGuardGuard } from './sesion-guard.guard';
import { RegistryPersonComponent } from './pages/registry-person/registry-person.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component:HomeComponent
      },
      {
        path:'login',
        component: LoginComponent,
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      {
        path:'welcome',
        component: WelcomeComponent,
        loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
        canActivate: [SesionGuardGuard]
      },
      {
        path:'registry-person',
        component: RegistryPersonComponent,
        loadChildren: () => import('./pages/registry-person/registry-person.module').then(m => m.RegistryPersonModule),
        canActivate: [SesionGuardGuard]
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
