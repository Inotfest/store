import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotyComponent } from './categoty.component';

describe('CategotyComponent', () => {
  let component: CategotyComponent;
  let fixture: ComponentFixture<CategotyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategotyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
