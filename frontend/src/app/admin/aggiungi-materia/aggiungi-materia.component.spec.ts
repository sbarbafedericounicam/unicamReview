import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiMateriaComponent } from './aggiungi-materia.component';

describe('AggiungiMateriaComponent', () => {
  let component: AggiungiMateriaComponent;
  let fixture: ComponentFixture<AggiungiMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggiungiMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
