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
import { Skill } from 'src/app/shared/models/interfaces/skill';

@Component({
  selector: 'app-lista-skill',
  templateUrl: './lista-skill.component.html',
  styleUrls: ['./lista-skill.component.css'],
})
export class ListaSkillComponent implements OnInit, AfterViewInit {
  colunas: string[] = ['id', 'name', 'chevron'];
  dataSource = new MatTableDataSource<Skill>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: DatabaseService) {}
  ngOnInit(): void {
    this.service.listarSkill().subscribe((res) => (this.dataSource.data = res));
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  select(element: Skill) {
    this.service.consultarSkill(element.id).subscribe((res) => {
      this.service.skill = res;
      this.changePage('info-skill');
    });
  }
  @Output() pageChange = new EventEmitter<string>();
  changePage(page: string) {
    this.pageChange.emit(page);
  }
}
