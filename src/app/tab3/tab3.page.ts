import { Component,ViewChild  } from '@angular/core';
import { CalendarComponent } from 'ionic2-calendar/calendar';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
currentDate = new Date();
currentMonth: string;
  constructor() {}
onViewTitleChanged(title: string) {
  const newLocal = this.currentMonth = title;
  }

}
