import { Component } from '@angular/core';
import { ExperiencesComponent, HeaderComponent, KnowLedgeComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, KnowLedgeComponent, ExperiencesComponent, proj ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
