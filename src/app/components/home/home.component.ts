import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { AboutComponent } from "../about/about.component";
import { ScrollerModule } from 'primeng/scroller';
import { ExperienceComponent } from "../experience/experience.component";
import { EducationComponent } from "../education/education.component";
import { ProjectsComponent } from "../projects/projects.component";
import { SkillsComponent } from "../skills/skills.component";
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [CardModule, ImageModule, ButtonModule, AvatarModule, AvatarGroupModule, AboutComponent, ScrollerModule, ExperienceComponent, EducationComponent, ProjectsComponent, SkillsComponent]
})
export class HomeComponent {

}
