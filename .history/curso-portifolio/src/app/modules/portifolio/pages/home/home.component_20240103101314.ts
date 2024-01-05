import { Component } from '@angular/core';
import { HeaderComponent } from '../../components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeaderComponent, k],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
