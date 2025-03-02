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
  selector: 'app-info-skill',
  templateUrl: './info-skill.component.html',
  styleUrls: ['./info-skill.component.css'],
})
export class InfoSkillComponent implements OnInit, AfterViewInit {
  colunas: string[] = ['id', 'level', 'name', 'delete'];
  dataSource = new MatTableDataSource<Skill>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: DatabaseService) {}
  get skill() {
    return this.service.skill;
  }
  ngOnInit(): void {
    this.dataSource.data = this.service.skill;
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  excluir(element: Skill) {
    console.log(element);
  }
  @Output() pageChange = new EventEmitter<string>();
  changePage(page: string) {
    this.pageChange.emit(page);
  }
}
