import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from 'src/app/services/database.service';
import { Skill } from 'src/app/shared/models/interfaces/skill';

@Component({
  selector: 'app-lista-npc-skill',
  templateUrl: './lista-npc-skill.component.html',
  styleUrls: ['./lista-npc-skill.component.css'],
})
export class ListaNpcSkillComponent implements OnInit, AfterViewInit {
  colunas: string[] = ['id', 'level', 'name', 'delete'];
  dataSource = new MatTableDataSource<Skill>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private service: DatabaseService) {}
  get skill() {
    return this.service.skill;
  }
  ngOnInit(): void {
    this.carregarSkills();
  }
  carregarSkills() {
    this.service
      .listarSkillPorNpc(this.service.npc.id)
      .subscribe((res) => (this.dataSource.data = res));
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  excluir(element: Skill) {
    if (!element.level) return;
    this.service
      .excluirSkillPorNpc(this.service.npc.id, element.id, element.level)
      .subscribe(() => this.carregarSkills());
  }
}
