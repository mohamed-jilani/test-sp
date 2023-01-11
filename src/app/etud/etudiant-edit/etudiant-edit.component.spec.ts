import { ComponentFixture, TestBed } from '@angular/core/testing';

import { etudiantEditComponent } from './etudiant-edit.component';

describe('etudiantEditComponent', () => {
  let component: etudiantEditComponent;
  let fixture: ComponentFixture<etudiantEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ etudiantEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(etudiantEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
