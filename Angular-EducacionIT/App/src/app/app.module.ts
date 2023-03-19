import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ItemsListComponent } from './Component/items-list/items-list.component';
import { ItemComponent } from './Component/item/item.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { HomeComponent } from './Component/home/home.component';
import { ItemEditionComponent } from './Component/item-edition/item-edition.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemComponent,
    NotFoundComponent,
    NavbarComponent,
    HomeComponent,
    ItemEditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
