import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfScreenComponent } from './conf-screen.component';

describe('ConfScreenComponent', () => {
  let component: ConfScreenComponent;
  let fixture: ComponentFixture<ConfScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
