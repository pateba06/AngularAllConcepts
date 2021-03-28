import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatevariablelearningComponent } from './templatevariablelearning.component';

describe('TemplatevariablelearningComponent', () => {
  let component: TemplatevariablelearningComponent;
  let fixture: ComponentFixture<TemplatevariablelearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatevariablelearningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatevariablelearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
