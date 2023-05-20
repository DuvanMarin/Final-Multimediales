import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseView2Component } from './course-view2.component';

describe('CourseView2Component', () => {
  let component: CourseView2Component;
  let fixture: ComponentFixture<CourseView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseView2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
