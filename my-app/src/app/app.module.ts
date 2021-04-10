import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LearnngifelsethenComponent } from './learning/learnngifelsethen/learnngifelsethen.component';
import { NgforlearningComponent } from './ngforlearning/ngforlearning.component';
import { PushslicengforComponent } from './pushslicengfor/pushslicengfor.component';
import { RoutelearningComponent } from './routelearning/routelearning.component';

import { RouterModule, Routes } from '@angular/router';

//will make constant appRoutes and import Routes in module.ts
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
   declarations: [
      AppComponent,
      LearnngifelsethenComponent,
      NgforlearningComponent,
      PushslicengforComponent,
      RoutelearningComponent,
      NotfoundComponent,
      LoginpageComponent
   ],
   imports: [

	 BrowserModule,
	 FormsModule,
	 AppRoutingModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
