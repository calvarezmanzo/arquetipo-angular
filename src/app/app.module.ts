import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { MenuComponent } from './pages/common/menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactoComponent } from './pages/common/contacto/contacto.component';
import { QuienesSomosComponent } from './pages/common/quienes-somos/quienes-somos.component';
import { ProfilComponent } from './pages/common/profil/profil.component';
import { ErrorComponent } from './pages/common/error/error.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { JsonPipe } from './json.pipe';
import { PagesRoutingModule } from './pages/pages-routing.module';


export function HttpLoaderFactory(http: any) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LayoutComponent,
    JsonPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      }
    })
],
  providers: [
    { provide: JsonPipe, useValue: {} }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
