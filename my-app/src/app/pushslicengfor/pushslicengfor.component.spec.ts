/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PushslicengforComponent } from './pushslicengfor.component';

describe('PushslicengforComponent', () => {
  let component: PushslicengforComponent;
  let fixture: ComponentFixture<PushslicengforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushslicengforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushslicengforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
