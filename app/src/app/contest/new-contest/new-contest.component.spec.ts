import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewContestComponent } from './new-contest.component';

describe('NewContestComponent', () => {
  let component: NewContestComponent;
  let fixture: ComponentFixture<NewContestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewContestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewContestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
