/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NgforlearningComponent } from './ngforlearning.component';

describe('NgforlearningComponent', () => {
  let component: NgforlearningComponent;
  let fixture: ComponentFixture<NgforlearningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgforlearningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgforlearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
