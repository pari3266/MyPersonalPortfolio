import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CardModule, FormsModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  items = [
    // {iconClass: 'pi pi-check', title: 'Design'},
    {iconClass: 'pi pi-google', title: 'frontEnd development'},
    {iconClass: 'pi pi-globe', title: 'site'},
    {iconClass: 'pi pi-tablet', title: 'pwa'},
  ]
}
