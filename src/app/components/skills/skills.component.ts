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
    {skillName: 'Html' , value: 80},
    {skillName: 'css' , value: 70},
    {skillName: 'js' , value: 30},
    {skillName: 'ts' , value: 60},
    {skillName: 'angular' , value: 70},
    {skillName: 'Angular material' , value: 80},
    {skillName: 'Bootstrap' , value: 70},
    {skillName: 'flex' , value: 80},
    {skillName: 'Pwa' , value: 60},
    {skillName: 'Web socket' , value: 50},
    {skillName: 'Google maps , google chart' , value: 70},
    {skillName: 'RxJs' , value: 70},
    {skillName: 'NgRx' , value: 40},
    {skillName: 'NgXs' , value: 60},
    {skillName: 'Git' , value: 50},
    {skillName: 'primeNg' , value: 60},
    {skillName: 'primeFlex' , value: 60},
    {skillName: 'React' , value: 50},
    {skillName: 'Nextjs' , value: 50},
  ]
}
