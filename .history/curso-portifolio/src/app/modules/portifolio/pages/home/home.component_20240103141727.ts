import { Component } from '@angular/core';
import { ExperiencesComponent, HeaderComponent, KnowLedgeComponent, ProjectsComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ Viewrepo, HeaderComponent, KnowLedgeComponent, ExperiencesComponent, ProjectsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
