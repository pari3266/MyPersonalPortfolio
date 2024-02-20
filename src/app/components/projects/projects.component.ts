import { Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ImageModule, ButtonModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { imgSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', projectName: 'vee app', link: 'http://app.vee.ir/', tecnologies: ['html', 'css', 'js'], },
    { imgSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', projectName: 'hamrahlotus', link: 'http://hamrahlotus.ir/', tecnologies: ['html', 'css', 'js'], },
    {
      imgSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', projectName: 'Fleet transportation management website', link: 'https://fms.arshinco.com/', tecnologies: ['Html', 'css', 'js', 'ts', 'angular 9,12', 'Angular material', 'flex', 'pwa', 'google maps',
        'google chart', 'restFul', 'web Socket', 'RxJs'],
    },
    {
      imgSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', projectName: 'Personal car management website', link: 'https://foxen.arshinco.com/', tecnologies: ['Html', 'css', 'js', 'ts', 'angular 9,12', 'Angular material', 'flex', 'pwa', 'google maps',
        'google chart', 'restFul', 'web Socket', 'RxJs'],
    },
    {
      imgSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', projectName: 'fms admin management website', link: '', tecnologies: ['Html', 'css', 'js', 'ts', 'angular 9,12', 'Angular material', 'flex', 'pwa', 'google maps',
        'google chart', 'restFul', 'web Socket', 'RxJs'],
    },
    {
      imgSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', projectName: 'Behkhan', link: 'https://behkhaan.ir/', tecnologies: ['Html', 'css', 'js', 'ts', 'angular 9,12', 'Angular material', 'flex', 'pwa', 'restFul', 'RxJs'],
    },
    {
      imgSrc: 'https://primefaces.org/cdn/primeng/images/galleria/galleria1.jpg', projectName: 'Admin management website of Behkhan', link: '', tecnologies: ['Html', 'css', 'js', 'ts', 'angular 9,12', 'Angular material', 'flex', 'pwa', 'restFul', 'RxJs'],
    },
  ]
}
