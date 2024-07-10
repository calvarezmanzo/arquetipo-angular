import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




import { LoginComponent } from './pages/login/login.component';
// import { UsersComponent } from './pages/users/users.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    // UsersComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
