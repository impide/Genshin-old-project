import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageDownloadComponent } from './main-page-download.component';

describe('MainPageDownloadComponent', () => {
  let component: MainPageDownloadComponent;
  let fixture: ComponentFixture<MainPageDownloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageDownloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
