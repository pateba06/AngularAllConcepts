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
import { NgcontentComponent } from './ngcontent/ngcontent.component';
import { CardcontentComponent } from './ngcontent/cardcontent/cardcontent.component';
import { NgcontainerComponent } from './ngcontainer/ngcontainer.component';
import { LearnservicesComponent } from './learnservices/learnservices.component';
import { TestserviceService } from 'src/appServices/testservice.service';




@NgModule({
   declarations: [
      AppComponent,
      LearnngifelsethenComponent,
      NgforlearningComponent,
      PushslicengforComponent,
      RoutelearningComponent,
      NotfoundComponent,
      LoginpageComponent,
      NgcontentComponent,
      CardcontentComponent,
      NgcontainerComponent,
      LearnservicesComponent
   ],
   imports: [
	 BrowserModule,
	 FormsModule,
	 AppRoutingModule
	],
   providers: [TestserviceService],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
