import {Component, OnInit } from '@angular/core';
import { CalendarService } from '../_services/index';
import { Day } from '../_models/index';
import { Modal } from '../../lib/angular2-modal/plugins/bootstrap';
import {Overlay} from '../../lib/angular2-modal';

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

  constructor(public calendarService: CalendarService, public modal: Modal, overlay: Overlay ) {
  }

  ngOnInit() {

  }
  onClick(day) {
    console.log(this.modal);
    // this.modal.vex()
    //   .showClose(true)
    //   .title('A simple Alert style modal window')
    //   .body(`
    //         <h4>Alert is a classic (title/body/footer) 1 button modal window that
    //         does not block.</h4>
    //         <input type="text" [(ngModel)]="day.event" Placeholder="Enter Text..."/>`)
    //   .open();
  }

}
