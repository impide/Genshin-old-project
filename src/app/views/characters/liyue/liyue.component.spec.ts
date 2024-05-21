import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiyueComponent } from './liyue.component';

describe('LiyueComponent', () => {
  let component: LiyueComponent;
  let fixture: ComponentFixture<LiyueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiyueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiyueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
