import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioneMateriaComponent } from './recensione-materia.component';

describe('RecensioneMateriaComponent', () => {
  let component: RecensioneMateriaComponent;
  let fixture: ComponentFixture<RecensioneMateriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecensioneMateriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecensioneMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
