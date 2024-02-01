import { Component,ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('chapitre1') chapitre1!: ElementRef;
  @ViewChild('chapitre2') chapitre2!: ElementRef;

  title = 'portfolio';
  constructor() { }
  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
}

}
