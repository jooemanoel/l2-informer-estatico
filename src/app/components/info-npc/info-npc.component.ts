import { Component, EventEmitter, Output } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-info-npc',
  templateUrl: './info-npc.component.html',
  styleUrls: ['./info-npc.component.css'],
})
export class InfoNpcComponent {
  constructor(private service: DatabaseService) {}
  get npc() {
    return this.service.npc;
  }
  npcFields = [
    { label: 'ID', value: this.npc.id },
    { label: 'Name', value: this.npc.name },
    { label: 'HP', value: this.npc.hp },
    { label: 'MP', value: this.npc.mp },
    { label: 'P. Atk', value: this.npc.patk },
    { label: 'P. Def', value: this.npc.pdef },
    { label: 'M. Atk', value: this.npc.matk },
    { label: 'M. Def', value: this.npc.mdef },
    { label: 'Attack Speed', value: this.npc.atkspd },
    { label: 'Casting Speed', value: this.npc.matkspd },
    { label: 'Template ID', value: this.npc.idTemplate },
    { label: 'Name (Server Side)', value: this.npc.serverSideName },
    { label: 'Title', value: this.npc.title },
    { label: 'Title (Server Side)', value: this.npc.serverSideTitle },
    { label: 'Class', value: this.npc.className },
    { label: 'Level', value: this.npc.level },
    { label: 'Sex', value: this.npc.sex },
    { label: 'Type', value: this.npc.type },
    { label: 'Attack Range', value: this.npc.attackrange },
    { label: 'HP Regen', value: this.npc.hpreg },
    { label: 'MP Regen', value: this.npc.mpreg },
    { label: 'STR', value: this.npc.str },
    { label: 'CON', value: this.npc.con },
    { label: 'DEX', value: this.npc.dex },
    { label: 'INT', value: this.npc.intelligence },
    { label: 'WIT', value: this.npc.wit },
    { label: 'MEN', value: this.npc.men },
    { label: 'EXP', value: this.npc.exp },
    { label: 'SP', value: this.npc.sp },
    { label: 'Aggro', value: this.npc.aggro },
    { label: 'Right Hand', value: this.npc.rhand },
    { label: 'Left Hand', value: this.npc.lhand },
    { label: 'Armor', value: this.npc.armor },
    { label: 'Walk Speed', value: this.npc.walkspd },
    { label: 'Run Speed', value: this.npc.runspd },
    { label: 'Faction ID', value: this.npc.factionId },
    { label: 'Faction Range', value: this.npc.factionRange },
    { label: 'Is Undead', value: this.npc.isUndead },
    { label: 'Absorb Level', value: this.npc.absorbLevel },
    { label: 'Absorb Type', value: this.npc.absorbType },
  ];
  @Output() pageChange = new EventEmitter<string>();
  changePage(page: string) {
    this.pageChange.emit(page);
  }
}
