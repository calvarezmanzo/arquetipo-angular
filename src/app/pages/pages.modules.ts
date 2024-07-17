import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeComponent } from "./home/home.component";
import { QuienesSomosComponent } from "./common/quienes-somos/quienes-somos.component";
import { ContactoComponent } from "./common/contacto/contacto.component";
import { FooterComponent } from "./common/footer/footer.component";
import { MenuComponent } from "./common/menu/menu.component";
import { CuentasComponent } from "./common/cuentas/cuentas.component";
import { ProfilComponent } from "./common/profil/profil.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorComponent } from "./common/error/error.component";

@NgModule({
    declarations: [
        QuienesSomosComponent,
        ContactoComponent,
        CuentasComponent,
        FooterComponent,
        MenuComponent,
        ProfilComponent,
        ErrorComponent
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