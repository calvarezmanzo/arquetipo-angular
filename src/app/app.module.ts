import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { MenuComponent } from './pages/common/menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LayoutComponent } from './pages/layout/layout.component';
import { CodigoAlfaServiceService } from './services/codigo-alfa-service.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CodigoAlfaInterceptorInterceptor } from './intercetors/codigo-alfa-interceptor.interceptor';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    CodigoAlfaServiceService,
    {provide: HTTP_INTERCEPTORS, useClass: CodigoAlfaInterceptorInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
