import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterlandingComponent } from './footerlanding.component';

describe('FooterlandingComponent', () => {
  let component: FooterlandingComponent;
  let fixture: ComponentFixture<FooterlandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterlandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterlandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
