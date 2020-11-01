import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListitemComponent } from './listitem/listitem.component';
import { HeaderComponent } from './header/header.component';
import { AdditemComponent } from './additem/additem.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListitemComponent,
    HeaderComponent,
    AdditemComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
