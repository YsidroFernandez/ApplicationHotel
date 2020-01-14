import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsAvailableComponent } from './rooms-available.component';

describe('RoomsAvailableComponent', () => {
  let component: RoomsAvailableComponent;
  let fixture: ComponentFixture<RoomsAvailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoomsAvailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
