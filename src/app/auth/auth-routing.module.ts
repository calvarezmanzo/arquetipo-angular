import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
// import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'login', component: LoginComponent },
      // { path: 'users', component: UsersComponent },
      {path:"**", redirectTo: "login"}
    ],
  },
];

@NgModule({
  
  imports: [
    RouterModule.forChild(routes)
  ],
})
export class AuthRoutingModule {}
