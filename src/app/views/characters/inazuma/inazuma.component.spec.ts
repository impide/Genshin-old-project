import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InazumaComponent } from './inazuma.component';

describe('InazumaComponent', () => {
  let component: InazumaComponent;
  let fixture: ComponentFixture<InazumaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InazumaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InazumaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
