import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HeaderComponent } from './@theme/components/header/header.component';
import { FooterComponent } from './@theme/components/footer/footer.component';
import { SidebarComponent } from './@theme/components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MenuParentsComponent } from './@theme/components/menu/menu-parents/menu-parents/menu-parents.component';
import { CommonModule } from '@angular/common';
import { MenuChildrensComponent } from './@theme/components/menu/menu-childrens/menu-childrens/menu-childrens.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    MenuParentsComponent,
    MenuChildrensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
