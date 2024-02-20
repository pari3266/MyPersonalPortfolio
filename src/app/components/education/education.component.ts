import { Component } from '@angular/core';
import { DateDayjsPipe } from "../../pipes/date.pipe";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-education',
    standalone: true,
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss',
    imports: [DateDayjsPipe, CommonModule]
})
export class EducationComponent {
  unixTimestamp = 1706678253;
  endDate = new Date(this.unixTimestamp * 1000);
  startDate = new Date(this.unixTimestamp * 1000);

  educations = [
    { uniName: 'zanjan university', startDate: 'Sep 2015', endDate: 'Jun 2020', field: 'computer software engineering' },
  ]
}
