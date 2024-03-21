import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsoListComponent } from './corso-list.component';

describe('CorsoListComponent', () => {
  let component: CorsoListComponent;
  let fixture: ComponentFixture<CorsoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorsoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CorsoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
