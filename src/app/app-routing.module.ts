import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'pages', loadChildren: () => import('./pages/pages-routing.module').then(m => m.PagesRoutingModule)},
  {path: '', redirectTo:'pages', pathMatch:'full'},
  {path: '**', pathMatch:'full', redirectTo:'pages'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
