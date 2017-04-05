import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CalendarService } from './_services/index';

import { AngularFireModule } from 'angularfire2';


@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBUrvmP1MBbNZ-t1iNyqQ9rxrhcVrSraBU',
      authDomain: 'calendar-app-15195.firebaseapp.com',
      databaseURL: 'https://calendar-app-15195.firebaseio.com',
      storageBucket: 'calendar-app-15195.appspot.com'
    })
  ],
  providers: [ CalendarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
