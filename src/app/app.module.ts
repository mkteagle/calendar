import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DayComponent } from './day/day.component';
import { TopbarComponent } from './topbar/topbar.component';
import { CalendarService } from './_services/index';

@NgModule({
  declarations: [
    AppComponent,
    DayComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ CalendarService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
