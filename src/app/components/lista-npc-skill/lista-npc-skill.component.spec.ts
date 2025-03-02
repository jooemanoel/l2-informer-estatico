import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNpcSkillComponent } from './lista-npc-skill.component';

describe('ListaNpcSkillComponent', () => {
  let component: ListaNpcSkillComponent;
  let fixture: ComponentFixture<ListaNpcSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaNpcSkillComponent]
    });
    fixture = TestBed.createComponent(ListaNpcSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
