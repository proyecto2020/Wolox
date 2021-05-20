import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoloxersComponent } from './woloxers.component';

describe('WoloxersComponent', () => {
  let component: WoloxersComponent;
  let fixture: ComponentFixture<WoloxersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoloxersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoloxersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
