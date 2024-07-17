import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './common/contacto/contacto.component';
import { CuentasComponent } from './common/cuentas/cuentas.component';
import { HomeComponent } from './home/home.component';
import { QuienesSomosComponent } from './common/quienes-somos/quienes-somos.component';
import { ProfilComponent } from './common/profil/profil.component';
import { ErrorComponent } from './common/error/error.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'profil', component: ProfilComponent},
  {path: 'quienesSomos', component: QuienesSomosComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'cuentas', component: CuentasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
