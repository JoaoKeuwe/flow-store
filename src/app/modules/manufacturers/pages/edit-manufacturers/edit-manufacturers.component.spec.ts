import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManufacturersComponent } from './edit-manufacturers.component';

describe('EditManufacturersComponent', () => {
  let component: EditManufacturersComponent;
  let fixture: ComponentFixture<EditManufacturersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditManufacturersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditManufacturersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
