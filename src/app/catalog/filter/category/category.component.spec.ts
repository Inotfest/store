import { ComponentFixture, TestBed } from '@angular/core/testing';

import { СategoryComponent } from './category.component';

describe('CategotyComponent', () => {
  let component: СategoryComponent;
  let fixture: ComponentFixture<СategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [СategoryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(СategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
