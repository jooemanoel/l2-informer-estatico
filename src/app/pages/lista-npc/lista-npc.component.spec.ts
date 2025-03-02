import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaNpcComponent } from './lista-npc.component';

describe('ListaNpcComponent', () => {
  let component: ListaNpcComponent;
  let fixture: ComponentFixture<ListaNpcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaNpcComponent]
    });
    fixture = TestBed.createComponent(ListaNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
