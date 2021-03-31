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
const appRoutes:Routes=[
   { path:'', component:RoutelearningComponent},  
   { path:'home', component:RoutelearningComponent},
   { path:'learning', component:LearnngifelsethenComponent},
   { path:'ngfor', component:NgforlearningComponent},
   { path:'pushandslice', component:PushslicengforComponent}
]


// <ul>
//   <li><a class="active" routerLink="#home">Home</a></li>
//   <li><a routerLink="#learning">Learning</a></li>
//   <li><a routerLink="#ngfor">ngFor</a></li>
//   <li><a routerLink="#pushandslice">Push/sliceng</a></li>
// </ul>

@NgModule({
   declarations: [
      AppComponent,
      LearnngifelsethenComponent,
      NgforlearningComponent,
      PushslicengforComponent,
      RoutelearningComponent
   ],
   imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule
	],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
