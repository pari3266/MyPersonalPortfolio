import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ImageModule,ButtonModule,CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  tecnologies = ['html','css','js']
  projects = [
    { imgSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', projectName: 'Personal Portofilo Using PrimeNg', tecnologies: this.tecnologies},
  ]
}
