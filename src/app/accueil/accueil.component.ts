import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements  OnInit  {
  words: string[] = ['Developpeur web', 'Developpeur mobile', 'Developpeur full Stack', 'Developpeur logiciel', 'Artiste'];
  currentWordIndex = 0;
  currentText = '';

  constructor() { }

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    const word = this.words[this.currentWordIndex];
    const interval = setInterval(() => {
      this.currentText += word[this.currentText.length];
      if (this.currentText === word) {
        clearInterval(interval);
        setTimeout(() => {
          this.deleteText();
        }, 1000); // Temps d'attente avant d'effacer le mot
      }
    }, 100); // Vitesse d'écriture des lettres
  }

  deleteText(): void {
    const interval = setInterval(() => {
      this.currentText = this.currentText.slice(0, -1);
      if (this.currentText === '') {
        clearInterval(interval);
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        setTimeout(() => {
          this.typeWriter();
        }, 500); // Temps d'attente avant d'écrire le prochain mot
      }
    }, 50); // Vitesse de suppression des lettres
  }

}
