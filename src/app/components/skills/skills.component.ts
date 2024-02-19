import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';
// For dynamic progressbar demo
import { ToastModule } from 'primeng/toast';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [ProgressBarModule,ToastModule, CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    {skillName: 'Html' , value: 80}
  ]
}
