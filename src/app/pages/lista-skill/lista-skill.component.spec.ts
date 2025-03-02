import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSkillComponent } from './lista-skill.component';

describe('ListaSkillComponent', () => {
  let component: ListaSkillComponent;
  let fixture: ComponentFixture<ListaSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaSkillComponent]
    });
    fixture = TestBed.createComponent(ListaSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
