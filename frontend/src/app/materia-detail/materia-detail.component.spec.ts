import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaDetailComponent } from './materia-detail.component';

describe('MateriaDetailComponent', () => {
  let component: MateriaDetailComponent;
  let fixture: ComponentFixture<MateriaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MateriaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
