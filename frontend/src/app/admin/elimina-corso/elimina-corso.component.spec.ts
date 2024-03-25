import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminaCorsoComponent } from './elimina-corso.component';

describe('EliminaCorsoComponent', () => {
  let component: EliminaCorsoComponent;
  let fixture: ComponentFixture<EliminaCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminaCorsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminaCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
