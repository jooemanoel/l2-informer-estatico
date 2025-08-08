import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Droplist } from '../shared/models/interfaces/droplist';
import { Item } from '../shared/models/interfaces/item';
import { Npc } from '../shared/models/interfaces/npc';
import { Skill } from '../shared/models/interfaces/skill';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  api = 'http://localhost:8080';
  npcList: Npc[] = [];
  itemList: Item[] = [];
  dropList: Droplist[] = [];
  skillList: Skill[] = [];
  npc!: Npc;
  item!: Item;
  skill: Skill[] = [];
  constructor(private http: HttpClient) {
    this.listarNpc().subscribe((res) => (this.npcList = res));
    this.listarItem().subscribe((res) => (this.itemList = res));
    this.listarDrop().subscribe((res) => (this.dropList = res));
  }
  listarNpc(): Observable<Npc[]> {
    return this.http.get<Npc[]>(`${this.api}/npc`);
  }
  consultarNpc(id: number): Observable<Npc> {
    return this.http.get<Npc>(`${this.api}/npc/${id}`);
  }
  listarItem(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.api}/item`);
  }
  consultarItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.api}/item/${id}`);
  }
  listarSkill(): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.api}/skill`);
  }
  consultarSkill(id: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.api}/skill/${id}`);
  }
  listarSkillPorNpc(npcId: number): Observable<Skill[]> {
    return this.http.get<Skill[]>(`${this.api}/npcskill/${npcId}`);
  }
  excluirSkillPorNpc(npcid: number, skillid: number, level: number) {
    return this.http.delete(
      `${this.api}/npcskill?npcid=${npcid}&skillid=${skillid}&level=${level}`
    );
  }
  listarDrop(): Observable<Droplist[]> {
    return this.http.get<Droplist[]>(`${this.api}/droplist`);
  }
  listarDropPorNpc(id: number): Observable<Droplist[]> {
    return this.http.get<Droplist[]>(`${this.api}/droplist/npc/${id}`);
  }
  listarDropPorItem(id: number): Observable<Droplist[]> {
    return this.http.get<Droplist[]>(`${this.api}/droplist/item/${id}`);
  }
  excluirDroplist(droplist: Droplist) {
    return this.http.delete(
      `${this.api}/droplist?mobId=${droplist.mobId}&itemId=${droplist.itemId}&category=${droplist.category}`
    );
  }
}
