import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { DateDayjsPipe } from "../../pipes/date.pipe";

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  imports: [CommonModule, DateDayjsPipe]
})
export class ExperienceComponent implements OnInit {

  unixTimestamp = 1706678253;
  date = new Date(this.unixTimestamp * 1000);

  jobs = [
    { title: 'test1', date: this.date, description: 'description1' },
    { title: 'test2', date: this.date, description: 'description2' },
    { title: 'test3', date: this.date, description: 'description3' },
    { title: 'test4', date: this.date, description: 'description4' },
    { title: 'test5', date: this.date, description: 'description5' },
  ]

  ngOnInit(): void {

  }

}
