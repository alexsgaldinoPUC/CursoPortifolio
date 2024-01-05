import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal([
    {
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto',
      title: 'Vida FullStack'
    }
  ])
}
