import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyContainerComponent } from './MyContainer/myContainer.component';
import { TopNavbarComponent } from './myContainer/top-navbar/top-navbar.component';
import { HeaderComponent } from './myContainer/header/header.component';
import { Textsection1Component } from './myContainer/textsection1/textsection1.component';
import { Textsection2Component } from './myContainer/textsection2/textsection2.component';

@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopNavbarComponent,
    HeaderComponent,
    Textsection1Component,
    Textsection2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
