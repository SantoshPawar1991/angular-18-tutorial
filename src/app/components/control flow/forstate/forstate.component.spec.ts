import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForstateComponent } from './forstate.component';

describe('ForstateComponent', () => {
  let component: ForstateComponent;
  let fixture: ComponentFixture<ForstateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForstateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
