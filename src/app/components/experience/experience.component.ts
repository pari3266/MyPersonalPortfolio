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
    { title: 'HamrahLotus -- FrontEnd developer', date: this.date, description: 'Credit allocation and wallet management system for employees of organizations, with customers like ewano, http://app.vee.ir/, https://vee.ir/', technologies: [] },
    { title: 'Self-employed -- FrontEnd developer', date: 'Aug 2022 - Aug 2023', description: 'Studying and learning React and Angular and writing practice projects.I read these technologies in this period of time', technologies: ['nginx', 'react', 'material ui', 'styled components', 'RxJs', 'NgRx'] },
    {
      title: 'Arshin -- FrontEnd developer', date: 'Apr 2021 - Jul 2022', description:
        `1. Fleet transportation management website : https://fms.arshinco.com/
        2. Personal car management website : https://foxen.arshinco.com/ 
        3. fms admin management website, 
    *FMS was about moving cars and managing cars with trackers as well as
    selling trackers to people to use the website and track their company cars.
    They can add their cars to the system and control fuels, trackers, and users.
    Add and control forms. See the path of the cars.
    Also they can define a mission or a job, a mission includes some jobs that are
    described in the program.
    *Personal car management was about tracking personal cars to protect
    against thieves and track the car's route. They can remotely control the
    car alarm. See the path of the cars.
    *admin management was for the control of vehicles and purchased
    tracking devices of various systems.`, technologies: ['Html', 'css', 'js', 'ts', 'angular 9,12', 'Angular material', 'flex', 'pwa', 'google maps',
        'google chart', 'restFul', 'web Socket', 'RxJs']
    },
    {
      title: 'Afarinesh —Intern & FrontEnd developer', date: 'Jun 2020- Mar 2021', description: `
    1. Behkhan (book social network) https://behkhaan.ir/
    2. Admin management website of Behkhan
    3. Update the Barkat Foundation website
    4. Admin management website of Barkat Foundation
    5. Teaching front-end programming
    trainees(html,css,js,ts,angular12)

    *A book social network for people who want to share the books they read and
their opinions about them. They can use other comments to choose a book to
read and can share how many books they want to read in a year, etc.
*Barkat Foundation was about charity and helping people like building
schools and so on.
*Admin management was about managing comments, books, users and
everything that was in the project.
    `, technologies: ['Html', 'css', 'bootstrap', 'flex', 'js', 'ts', 'angular 12', 'Angular material', 'restFul', 'lazyloading',
        'a little rxjs(like subject, switchMap,of)']
    },
  ]

  ngOnInit(): void {

  }

}
