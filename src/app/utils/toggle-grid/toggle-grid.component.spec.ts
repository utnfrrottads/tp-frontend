import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleGridComponent } from './toggle-grid.component';

describe('ToggleGridComponent', () => {
  let component: ToggleGridComponent;
  let fixture: ComponentFixture<ToggleGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToggleGridComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
