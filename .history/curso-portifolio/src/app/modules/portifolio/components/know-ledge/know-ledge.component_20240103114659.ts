import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-know-ledge',
  standalone: true,
  imports: [Ng],
  templateUrl: './know-ledge.component.html',
  styleUrl: './know-ledge.component.scss'
})
export class KnowLedgeComponent {
  public arrayKnowledge = signal([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular'
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Ícone de conhecimento de html5'
    },
  ])
}
