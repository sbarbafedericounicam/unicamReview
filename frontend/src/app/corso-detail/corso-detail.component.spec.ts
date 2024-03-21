import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsoDetailComponent } from './corso-detail.component';

describe('CorsoDetailComponent', () => {
  let component: CorsoDetailComponent;
  let fixture: ComponentFixture<CorsoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsoDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorsoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
