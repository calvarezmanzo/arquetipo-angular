import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { MenuComponent } from './pages/common/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Login2Component } from './pages/login2/login2.component';
import { ForminscripcionComponent } from './pages/forminscripcion/forminscripcion.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { SavePersonaInterceptor } from './interceptors/save-persona.interceptor';
import { PersonaService } from './services/persona.service';
import { PersonaComponent } from './pages/persona/persona.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonaComponent,
   // HeaderComponent,
   // FooterComponent,
   // MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: SavePersonaInterceptor, multi: true},
    PersonaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
