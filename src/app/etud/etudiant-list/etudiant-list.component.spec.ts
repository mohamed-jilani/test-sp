import { ComponentFixture, TestBed } from '@angular/core/testing';

import { etudiantListComponent } from './etudiant-list.component';

describe('etudiantListComponent', () => {
  let component: etudiantListComponent;
  let fixture: ComponentFixture<etudiantListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ etudiantListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(etudiantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
