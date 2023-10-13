import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FetchTableComponent } from './fetch-table.component';

describe('FetchTableComponent', () => {
  let component: FetchTableComponent;
  let fixture: ComponentFixture<FetchTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FetchTableComponent]
    });
    fixture = TestBed.createComponent(FetchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
