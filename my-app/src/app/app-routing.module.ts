import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearnngifelsethenComponent } from './learning/learnngifelsethen/learnngifelsethen.component';
import { NgforlearningComponent } from './ngforlearning/ngforlearning.component';
import { PushslicengforComponent } from './pushslicengfor/pushslicengfor.component';
import { RoutelearningComponent } from './routelearning/routelearning.component';
import { RouterModule, Routes } from '@angular/router';
//will make constant appRoutes and import Routes in module.ts
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ProductComponent } from './product/product.component';
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { ParentComponent } from './parent/parent.component';


const appRoutes:Routes=[
  { path:'', redirectTo:'login', pathMatch:'full'},  
  { path:'home', component:RoutelearningComponent},
  { path:'login', component:LoginpageComponent},
  { path:'learning', component:LearnngifelsethenComponent},
  { path:'ngfor', component:NgforlearningComponent},
  { path:'pushandslice', component:PushslicengforComponent},
  { path:'product', component:ProductComponent},
  { path:'ngcontent', component:NgcontentComponent},
  { path:'ngcontainer', component:NgcontainerComponent},
  { path:'parent', component:ParentComponent},
  { path:'**', component:NotfoundComponent} // wild card route
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
