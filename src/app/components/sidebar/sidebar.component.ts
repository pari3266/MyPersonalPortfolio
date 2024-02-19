import { Component } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ListboxModule } from 'primeng/listbox';
import { FormsModule } from '@angular/forms';

interface Topic {
  name: string,
  id: string
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [AvatarGroupModule,AvatarModule,ScrollPanelModule,ListboxModule,FormsModule ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  topics!: Topic[];

  selectedTopic: Topic = {name: 'home', id: 'home'};

  ngOnInit() {
    this.topics = [
      { name: 'home', id: 'home'},
      { name: 'about', id: 'about'},
      { name: 'experience', id: 'experience'},
      { name: 'education', id: 'education'},
      { name: 'projects', id: 'projects'},
      { name: 'skills', id: 'skills'},
    ]
  }

  handleScroll(topic: any) {
    // console.log(this.selectedTopic, topic, topic.id);
    const element = document.getElementById(topic.id);
    element?.scrollIntoView({behavior: 'smooth'});
  }
}
