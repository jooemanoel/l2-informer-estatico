import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  page = 'lista-npc';
  page2 = 'lista-item';
  page3 = 'lista-skill';
  changePage(page: string) {
    this.page = page;
  }
  changePage2(page: string) {
    this.page2 = page;
  }
  changePage3(page: string) {
    this.page3 = page;
  }
}
