import { Component, EventEmitter, Output } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent {
constructor(private service: DatabaseService) {}
  get item() {
    return this.service.item;
  }
  @Output() pageChange = new EventEmitter<string>();
    changePage(page: string) {
      this.pageChange.emit(page);
    }
}
