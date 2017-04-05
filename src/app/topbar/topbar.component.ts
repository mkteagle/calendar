import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../_services/index';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  public days: any[] = this.calendarService.days;
  public month: any = this.calendarService.month;
  public dayOne: any = this.calendarService.dayOne;
  public year: any = this.calendarService.year;
  public today: any = this.calendarService.today;
  public previousDate: any = this.calendarService.previousDate;
  public pointerToSunday: any = this.calendarService.pointerToSunday;
  public todaysDate: any = this.calendarService.todaysDate;

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
  }

  changeMonth(): void {
    this.calendarService.notifyOther({option: 'onSubmit', data: {}});
  }
  createNewDates(): void {

  }

}
