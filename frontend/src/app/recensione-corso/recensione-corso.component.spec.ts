import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioneCorsoComponent } from './recensione-corso.component';

describe('RecensioneCorsoComponent', () => {
  let component: RecensioneCorsoComponent;
  let fixture: ComponentFixture<RecensioneCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecensioneCorsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecensioneCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
