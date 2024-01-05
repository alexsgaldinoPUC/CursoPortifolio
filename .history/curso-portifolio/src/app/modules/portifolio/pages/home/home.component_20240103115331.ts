import { Component } from '@angular/core';
import { HeaderComponent } from '../../components';
import { KnowLedgeComponent } from '../../components/know-ledge/know-ledge.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, KnowLedgeComponent, ex ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
