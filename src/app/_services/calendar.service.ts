import { Injectable } from '@angular/core';
import { Day } from '../_models/index';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CalendarService {
  public months: any[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public days: any[] = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  public today: any = (new Date().getDay() + 1);
  public year: any = new Date().getUTCFullYear();
  public dateIndex = new Date('0' + ((new Date().getMonth()) + 1).toString() + '-01-' + this.year.toString()).getDay();
  public month: any = this.months[new Date().getMonth()];
  public dayOne: any = this.days[this.dateIndex];
  public previousDate: any = this.numberOfDays(this.year, (new Date().getMonth()));
  public pointerToSunday: any = this.previousDate - (this.dateIndex - 1);
  public todaysDate: any = this.numberOfDays(this.year, (new Date().getMonth() + 1));
  public dayRepeater: Day[] = this.dayFiller();
  private notify = new Subject<any>();
  notifyObservable$ = this.notify.asObservable();

  constructor() { }

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  numberOfDays (year, month) {
    var d = new Date(year, month, 0);
    return d.getDate();
  }
  dayFiller() {
    let array = [];
    let count = this.pointerToSunday;
    let firstTry = false;
    for (let i = 0; i < 42; i ++) {
      if (count === this.previousDate && !firstTry) {
        array.push({event: '', day: count});
        firstTry = true;
        count = 1;
      }
      else if (count === this.todaysDate && firstTry) {
        array.push({event: '', day: count});
        firstTry = false;
        count = 1;
      }
      else {
        array.push({event: '', day: count});
        count++;
      }
    }
    return array;
  }



}
