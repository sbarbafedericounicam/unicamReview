import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiCorsoComponent } from './aggiungi-corso.component';

describe('AggiungiCorsoComponent', () => {
  let component: AggiungiCorsoComponent;
  let fixture: ComponentFixture<AggiungiCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AggiungiCorsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AggiungiCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
