import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSkillComponent } from './info-skill.component';

describe('InfoSkillComponent', () => {
  let component: InfoSkillComponent;
  let fixture: ComponentFixture<InfoSkillComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoSkillComponent]
    });
    fixture = TestBed.createComponent(InfoSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
