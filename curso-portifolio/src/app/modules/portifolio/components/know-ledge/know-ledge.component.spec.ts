import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowLedgeComponent } from './know-ledge.component';

describe('KnowLedgeComponent', () => {
  let component: KnowLedgeComponent;
  let fixture: ComponentFixture<KnowLedgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowLedgeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowLedgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
