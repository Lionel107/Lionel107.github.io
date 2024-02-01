import { Component } from '@angular/core';
import { ScrollService } from '../Service/scroll.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private scrollService: ScrollService) { }

  scrollToElement(elementId: string): void {
    this.scrollService.scrollToElement(elementId);
  }
}
