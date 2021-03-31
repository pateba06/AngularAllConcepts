import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnngifelsethenComponent } from './learnngifelsethen.component';

describe('LearnngifelsethenComponent', () => {
  let component: LearnngifelsethenComponent;
  let fixture: ComponentFixture<LearnngifelsethenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnngifelsethenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnngifelsethenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
