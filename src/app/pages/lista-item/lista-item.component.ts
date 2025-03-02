import {
  AfterViewInit,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/services/database.service';
import { Item } from 'src/app/shared/models/interfaces/item';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css'],
})
export class ListaItemComponent implements OnInit, AfterViewInit {
  colunas: string[] = ['id', 'name', 'addName'];
  dataSource = new MatTableDataSource<Item>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: DatabaseService) {}
  ngOnInit(): void {
    this.service.listarItem().subscribe((res) => (this.dataSource.data = res));
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  @Output() pageChange = new EventEmitter<string>();
  changePage(page: string) {
    this.pageChange.emit(page);
  }
}
