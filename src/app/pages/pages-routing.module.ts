import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './common/contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './common/quienes-somos/quienes-somos.component';
import { ProfilComponent } from './profil/profil.component';
import { ErrorComponent } from './common/error/error.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children:[
      {
        path: 'home', component: HomeComponent,
      }
  ]},
  {path: 'login', component: LoginComponent, 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {path: 'perfil', component: ProfilComponent,
    loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule)  
  },
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
