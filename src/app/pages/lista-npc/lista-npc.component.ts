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
import { Npc } from 'src/app/shared/models/interfaces/npc';

@Component({
  selector: 'app-lista-npc',
  templateUrl: './lista-npc.component.html',
  styleUrls: ['./lista-npc.component.css'],
})
export class ListaNpcComponent implements OnInit, AfterViewInit {
  colunas: string[] = ['id', 'name', 'chevron'];
  dataSource = new MatTableDataSource<Npc>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: DatabaseService) {}
  ngOnInit(): void {
    this.service.listarNpc().subscribe((res) => (this.dataSource.data = res));
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  select(element: Npc) {
    this.service.consultarNpc(element.id).subscribe((res) => {
      this.service.npc = res;
      this.changePage('info-npc');
    });
  }
  @Output() pageChange = new EventEmitter<string>();
  changePage(page: string) {
    this.pageChange.emit(page);
  }
}
