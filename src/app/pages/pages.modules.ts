import { NgModule } from "@angular/core";
import { CommonModule, JsonPipe } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from "./home/home.component";
import { QuienesSomosComponent } from "./common/quienes-somos/quienes-somos.component";
import { ContactoComponent } from "./common/contacto/contacto.component";
import { FooterComponent } from "./common/footer/footer.component";
import { MenuComponent } from "./common/menu/menu.component";
import { CuentasComponent } from "./common/cuentas/cuentas.component";
import { ProfilComponent } from "./profil/profil.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorComponent } from "./common/error/error.component";
import { HeaderComponent } from "./common/header/header.component";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
    declarations: [
        HomeComponent,
        HeaderComponent,
        FooterComponent,
        MenuComponent,
        LayoutComponent,
    ],
    imports: [
        CommonModule,
        PagesRoutingModule,
        FormsModule,
        CommonModule,
        ReactiveFormsModule
    ]
})

export class PagesModule { }