import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MondstadtComponent } from './mondstadt.component';

describe('MondstadtComponent', () => {
  let component: MondstadtComponent;
  let fixture: ComponentFixture<MondstadtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MondstadtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MondstadtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
