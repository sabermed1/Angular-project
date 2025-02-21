import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappartementComponent } from './addappartement.component';

describe('AddappartementComponent', () => {
  let component: AddappartementComponent;
  let fixture: ComponentFixture<AddappartementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddappartementComponent]
    });
    fixture = TestBed.createComponent(AddappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
