import { Component } from '@angular/core';
import { HeaderComponent } from '../../components';
import { KnowLedgeComponent } from '../../components/know-ledge/know-ledge.component';
import { ExperiencesComponent } from '../../components/experiences/experiences.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, KnowLedgeComponent, ExperiencesComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
