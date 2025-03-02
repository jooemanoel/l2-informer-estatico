import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoNpcComponent } from './info-npc.component';

describe('InfoNpcComponent', () => {
  let component: InfoNpcComponent;
  let fixture: ComponentFixture<InfoNpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfoNpcComponent]
    });
    fixture = TestBed.createComponent(InfoNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
