import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-know-ledge',
  standalone: true,
  imports: [],
  templateUrl: './know-ledge.component.html',
  styleUrl: './know-ledge.component.scss'
})
export class KnowLedgeComponent {
  public arrayKnowledge = signal([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5'
    }
  ])
}
