import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SplitterModule } from 'primeng/splitter';
import { NgxScrollTopModule } from 'ngx-scrolltop';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HomeComponent, SidebarComponent, SplitterModule,NgxScrollTopModule]
})
export class AppComponent {
  title = 'portfolio';
}
