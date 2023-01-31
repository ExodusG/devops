import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationItemComponent } from './association-item.component';

describe('AssociationItemComponent', () => {
  let component: AssociationItemComponent;
  let fixture: ComponentFixture<AssociationItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
