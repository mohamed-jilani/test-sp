import { ComponentFixture, TestBed } from '@angular/core/testing';

import { etudiantAddComponent } from './etudiant-add.component';

describe('etudiantAddComponent', () => {
  let component: etudiantAddComponent;
  let fixture: ComponentFixture<etudiantAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ etudiantAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(etudiantAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
