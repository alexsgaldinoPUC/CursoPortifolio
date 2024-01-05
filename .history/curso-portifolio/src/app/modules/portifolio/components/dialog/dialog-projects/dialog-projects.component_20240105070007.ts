import { Component, Inject, OnInit, signal } from '@angular/core';
import { IProjects } from '../../../interfaces/Projects.Interface';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [ MatDialogModule ],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit{
  constructor(
    @Inject(MAT_DIALOG_DATA) private _data: IProjects,

    private _dialogRef: MatDialogRef
  ){}

  public getData = signal<IProjects | null>(null)

  ngOnInit(): void {
    this.getData.set(this._data)
  }
}
