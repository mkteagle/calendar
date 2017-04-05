import {Component, OnInit } from '@angular/core';
import { CalendarService } from '../_services/index';
import { Day } from '../_models/index';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  public dayRepeater: Day[] = this.calendarService.dayRepeater;
  public days: any[] = this.calendarService.days;
  public dateIndex: any = this.calendarService.dateIndex;
  public todaysDate: any = this.calendarService.todaysDate;
  public currentIndex: number;

  constructor(public calendarService: CalendarService ) {
  }

  ngOnInit() {

  }
  onClick(day) {

  }

}
