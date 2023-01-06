import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropriaitaireComponent } from './propriaitaire.component';

describe('PropriaitaireComponent', () => {
  let component: PropriaitaireComponent;
  let fixture: ComponentFixture<PropriaitaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropriaitaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropriaitaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
