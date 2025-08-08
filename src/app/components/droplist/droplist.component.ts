import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/services/database.service';
import { Droplist } from 'src/app/shared/models/interfaces/droplist';

@Component({
  selector: 'app-droplist',
  templateUrl: './droplist.component.html',
  styleUrls: ['./droplist.component.css'],
})
export class DroplistComponent implements OnInit, AfterViewInit {
  @Input() filtro = 'npc';
  colunas: string[] = [
    'mobName',
    'itemName',
    'category',
    'chance',
    'editar',
    'excluir',
  ];
  dataSource = new MatTableDataSource<Droplist>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: DatabaseService) {}
  ngOnInit(): void {
    this.carregarDroplist();
  }
  carregarDroplist() {
    if (this.filtro === 'npc') {
      if (!this.service.npc) return;
      this.service
        .listarDropPorNpc(this.service.npc.id)
        .subscribe((res) => (this.dataSource.data = res));
    } else {
      if (!this.service.item) return;
      this.service
        .listarDropPorItem(this.service.item.id)
        .subscribe((res) => (this.dataSource.data = res));
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  calcularChance(chance: number) {
    return `${Math.floor(chance / 100) / 100}%`;
  }
  excluir(element: Droplist) {
    this.service
      .excluirDroplist(element)
      .subscribe(() => this.carregarDroplist());
  }
  editar(element: Droplist) {
    console.log(element);
  }
}
