import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../pages/common/header/header.component';
import { MenuComponent } from '../pages/common/menu/menu.component';
import { FooterComponent } from '../pages/common/footer/footer.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, MenuComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, MenuComponent, FooterComponent]
})
export class SharedModule { }
