import { Component, signal } from '@angular/core';
import { IProjects } from '../../../interfaces/Projects.Interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent {
  @Inj
  public getData = signal<IProjects | null>(null)

}
