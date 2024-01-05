import { Component, Inject, signal } from '@angular/core';
import { IProjects } from '../../../interfaces/Projects.Interface';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) private
  ){}
  public getData = signal<IProjects | null>(null)

}
