import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AndreasComponent } from './andreas.component';

describe('AndreasComponent', () => {
  let component: AndreasComponent;
  let fixture: ComponentFixture<AndreasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AndreasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AndreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
